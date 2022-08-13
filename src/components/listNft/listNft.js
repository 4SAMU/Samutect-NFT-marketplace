import React, { useState } from "react";
import "../../App.css";
import "./listNft.css";
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../pinata";
import Marketplace from "../../Marketplace.json";

const ListNft = () => {
  const [formParams, updateFormParams] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [fileURL, setFileURL] = useState(null);
  const ethers = require("ethers");
  const [message, updateMessage] = useState("");

  //This function uploads the NFT image to IPFS
  async function OnChangeFile(e) {
    var file = e.target.files[0];
    //check for file extension
    try {
      //upload the file to IPFS
      const response = await uploadFileToIPFS(file);
      if (response.success === true) {
        console.log("Uploaded image to Pinata: ", response.pinataURL);
        setFileURL(response.pinataURL);
      }
    } catch (e) {
      console.log("Error during file upload", e);
    }
  }

  //This function uploads the metadata to IPDS
  async function uploadMetadataToIPFS() {
    const { name, description, price } = formParams;
    //Make sure that none of the fields are empty
    if (!name || !description || !price || !fileURL) return;

    const nftJSON = {
      name,
      description,
      price,
      image: fileURL,
    };

    try {
      //upload the metadata JSON to IPFS
      const response = await uploadJSONToIPFS(nftJSON);
      if (response.success === true) {
        console.log("Uploaded JSON to Pinata: ", response);
        return response.pinataURL;
      }
    } catch (e) {
      console.log("error uploading JSON metadata:", e);
    }
  }

  async function listNFT(e) {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    e.preventDefault();

    //Upload data to IPFS
    try {
      const metadataURL = await uploadMetadataToIPFS();
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        Marketplace.address,
        Marketplace.abi,
        signer
      );

      //massage the params to be sent to the create NFT request
      const price = ethers.utils.parseUnits(formParams.price, "ether");
      let listingPrice = await contract.getListPrice();
      listingPrice = listingPrice.toString();

      //actually create the NFT
      let transaction = await contract.createToken(metadataURL, price, {
        value: listingPrice,
      });
      await transaction.wait();
      updateMessage("Please wait.. uploading (upto 5 mins)");

      alert("Successfully listed your NFT!");
      updateMessage("");
      updateFormParams({ name: "", description: "", price: "" });
      window.location.replace("/");
    } catch (e) {
      updateMessage("failed, please fill all fields...");
      alert(e);
    }
  }

  console.log("Working", process.env);
  return (
    <section id="ListNFT">
      <div className="listNft_container">
        <div className="listBoard">
          <div className="nft_name">
            NFT Name
            <input
              type="text"
              placeholder="your NFT name"
              className="nft_name_textbox"
              id="name"
              onChange={(e) =>
                updateFormParams({ ...formParams, name: e.target.value })
              }
              value={formParams.name}
            ></input>
          </div>
          <div className="nft_description">
            NFT Description
            <textarea
              cols="10"
              rows="5"
              placeholder="your NFT details"
              className="nft_description_textarea"
              id="description"
              type="text"
              value={formParams.description}
              onChange={(e) =>
                updateFormParams({ ...formParams, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="price_in_eth">
            price (In ETH)
            <input
              type="text"
              placeholder="min 0.01 ETH"
              className="price_in_eth_textbox"
              step="0.01"
              value={formParams.price}
              onChange={(e) =>
                updateFormParams({ ...formParams, price: e.target.value })
              }
            ></input>
          </div>
          <div className="uploadNFT">
            upload NFT
            <input type={"file"} onChange={OnChangeFile}></input>
            <button className="listNFT_BTN" onClick={listNFT}>
              ListNFT
              <div className="catchError">{message}</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListNft;
