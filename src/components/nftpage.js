import React from "react"
import { useParams } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import '../../src/App.css';
import { GoHome } from "react-icons/go";

export default function NFTPage () {

const [data, updateData] = useState({});
const [dataFetched, updateDataFetched] = useState(false);
const [message, updateMessage] = useState("");
const [currAddress, updateCurrAddress] = useState("0x");

async function getNFTData(tokenId) {
    const { ethereum } = window.ethereum;
      if (ethereum) {
        alert("please install metamask");
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      console.log("my address", address)
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    const tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    let meta = await axios.get(tokenURI);
    meta = meta.data;
    console.log(listedToken);

    let item = {
        price: meta.price,
        tokenId: tokenId,
        seller: listedToken.seller,
        owner: listedToken.owner,
        image: meta.image,
        name: meta.name,
        description: meta.description,
    }
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr)
    updateCurrAddress(addr);
}

async function buyNFT(tokenId) {
    try {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        //Pull the deployed contract instance
        let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
        const salePrice = ethers.utils.parseUnits(data.price, 'ether')
        updateMessage("Buying this NFT... Please Wait")
        //run the executeSale function
        let transaction = await contract.executeSale(tokenId, {value:salePrice});
        await transaction.wait();

        alert('You successfully bought the NFT!');
        window.location.reload();
        updateMessage("");
    }
    catch(e) {
        alert("Upload Error"+e)
        window.location.reload();
    }
}

const ToHome=()=>{
    window.location.replace("/Home")
}

    const params = useParams();
    const tokenId = params.tokenId;
    if(!dataFetched)
        getNFTData(tokenId);

    return(
       
        <div className="NFTPAGE">
        <div className="nft_container">
            <div>
                <img src={data.image}  alt="" className="nftBig"/>
                
            </div>
            <div>
                <img src={data.image}  alt="" className="nftSmall"/>
                
            </div>
            <div className="nftName">
                {data.name}  
                <div className="nfttile_description">
                {data.description}            
            </div>          
            </div>
            <div className="nfttile_details">
            <div className="nftOwner">
                        Owner: <a href="https://goerli.etherscan.io/address/"><span>{data.owner}</span></a>
                    </div>   
                    <div className="nftOwner">
                        Seller: <span>{data.seller}</span>
                    </div> 
                    <div className="nftOwner">
                        Price: <span>{data.price} ETH</span>
                    </div> 
                      
            </div> 
            <div >
            { currAddress === data.owner || currAddress === data.seller ?
                <div className="u_own_this_nft">You are the owner of this NFT</div>:<button onClick={() => buyNFT(tokenId)}className="BuyBtn">Buy this NFT</button>
            }
            
            

            <button className="homeIcon" onClick={ToHome}><GoHome /></button>
           
        </div>
        
        </div> 
        <div className="buying_now">{message}</div>
        
        </div>
       
    )
}