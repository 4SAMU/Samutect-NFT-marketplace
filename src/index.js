import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import LandingPage from './components/landingpage/LandingPage';
import HomePage from './components/Homepage/HomePage';
import NFTPage from './components/nftpage';
import ListNft from './components/listNft/listNft';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/Home/" element={<HomePage />}/> 
        <Route path="/Nft_page/:tokenId" element={<NFTPage />}/>        
        <Route path="/ListNFT/" element={<ListNft />}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
