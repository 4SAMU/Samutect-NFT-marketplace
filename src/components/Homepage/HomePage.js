import React, { useState } from "react";
import "./homepage.css";
import Monkey from "./monkey.png";
import { FcSearch } from "react-icons/fc";
import { BsCollection } from "react-icons/bs";
import { AiOutlineTransaction } from "react-icons/ai";
import { RiGasStationFill } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import axios from "axios";
import MarketplaceJSON from "../../Marketplace.json";
import NFTTile from "../NFTTile";
import { ethers } from "ethers";

const HomePage = () => {
  const [walletAdd, setWalletAdd] = useState("");
  const [balance, setBalance] = useState("");

  const showBalance = async (walletAdd) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://eth-goerli.g.alchemy.com/v2/sLQ6yaCH5ykUITWx8na3rGlXASlwN7Ia"
      );
      const balance = await provider.getBalance(walletAdd);
      console.log("balance =", parseFloat(ethers.utils.formatEther(balance)));
      setBalance(
        parseFloat(ethers.utils.formatEther(balance)).toPrecision(4) + " ETH"
      );
    } catch (error) {
      console.log("error is here", error);
    }
  };

  const connectWebsite = async () => {
    try {
      const { ethereum } = window.ethereum;
      if (ethereum) {
        alert("please install metamask");
      }
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      showBalance(address);
      setWalletAdd(
        String(address).substring(0, 5) + "..." + String(address).substring(38)
      );
      console.log(address);
    } catch (error) {
      return {
        status: error,
      };
    }
  };
  connectWebsite();

  const sampleData = [
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/03/4b/11/034b11e375eef760ecc30cf942c7bde1.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/95/da/14/95da14c9a000f0a130f2ce4f03277c7a.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/03/4b/11/034b11e375eef760ecc30cf942c7bde1.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/d7/3f/b4/d73fb43200e5c7229b6700c0ed7c1c4b.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/fa/74/e6/fa74e62a64ef588b631bbbb06fe3b335.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/564x/c6/0c/e0/c60ce0d207407f82fbb04682e7a14437.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },

    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/b7/b6/5d/b7b65d8c3ed8b5f45486e0ca3eb3bd1f.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/2f/3f/47/2f3f47e9b9b7fe1c432ae062fd678190.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "NFT artwork",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/736x/50/f4/99/50f499bb06950e7b3fb3a424b3a89b09.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/564x/b3/3d/65/b33d65a7e1faa2479c8081a063455fde.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/a0/82/43/a08243a7391148a58674c7ed3520be04.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/12/87/04/12870494b5d72f989d5ba1f25b53ae3d.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/fa/74/e6/fa74e62a64ef588b631bbbb06fe3b335.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/b7/b6/5d/b7b65d8c3ed8b5f45486e0ca3eb3bd1f.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
    {
      name: "NFT",
      description: "First NFT",
      website: "http://axieinfinity.io",
      image:
        "https://i.pinimg.com/236x/f8/7c/4b/f87c4b515fa9f09a191111593828bbad.jpg",
      price: "0.03ETH",
      currentlySelling: "True",
      address: "0xe81Bf5A757CB4f7F82a2F23b1e59bE45c33c5b13",
    },
  ];
  const [data, updateData] = useState(sampleData);
  const [dataFetched, updateFetched] = useState(false);

  async function getAllNFTs() {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance

    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );
    //create an NFT Token
    let transaction = await contract.getAllNFTs();

    //Fetch all the details of every NFT from the contract and display
    const items = await Promise.all(
      transaction.map(async (i) => {
        const tokenURI = await contract.tokenURI(i.tokenId);
        let meta = await axios.get(tokenURI);
        meta = meta.data;

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        };
        return item;
      })
    );
    updateFetched(true);
    updateData(items);
  }

  if (!dataFetched) getAllNFTs();
  return (
    <section id="Home">
      <div className="App1">
        <div className="dashboard">
          <div className="logoDB">NFT marketplace</div>
        </div>
        <div className="listnftBoard">
          <div className="allNFTs_text">TOP NFTS</div>
          <div className="see_all_text">see all</div>
          <p className="text_listnftboard">Create your own NFT collection</p>
          <a href="#ListNFT">
            <button className="listNFTbtn">List NFT</button>
          </a>
          <div className="monkeyPic">
            <img
              src={Monkey}
              alt="https://i.pinimg.com/236x/f8/7c/4b/f87c4b515fa9f09a191111593828bbad.jpg"
            ></img>
          </div>
        </div>

        <div className="allNFTs">
          <div className="nftArea">
            {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })}
          </div>
        </div>

        <div className="walletDetails">
          <button className="connected">connected</button>
          {connectWebsite && (
            <button className="walletAddress">{walletAdd}</button>
          )}
          {connectWebsite && <button className="walletBal">{balance}</button>}
        </div>
        <div className="transactionDetails">
          <div className="transactionDetails_text">Transaction Details</div>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="search your nfts"
            className="input_search"
          />
          <FcSearch className="search_icon" />
        </div>
        <div className="myCollection">
          <BsCollection className="icon" />
          <div className="myCollection_text">My collection</div>
        </div>
        <div className="sendTransaction">
          <AiOutlineTransaction className="icon" />
          <div className="myCollection_text">send Transaction</div>
        </div>
        <div className="TopUpBal">
          <RiGasStationFill className="icon" />
          <div className="myCollection_text">
            <a href="https://goerlifaucet.com/">Top up wallet</a>
          </div>
        </div>
        <div className="Resources">
          <GiBookshelf className="icon" />
          <div className="myCollection_text">Resources</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
