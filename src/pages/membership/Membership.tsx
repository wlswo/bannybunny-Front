import React, { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Mint, ListNSell, BuyNFT, CarrotShop, NFTDetail } from "./routes";

const Membership: FC = () => {
  const [account, setAccount] = useState<string>("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Main account={account} />} />
        <Route path="/mint" element={<Mint account={account} />} />
        <Route path="/listnsell" element={<ListNSell account={account} />} />
        <Route path="/buynft" element={<BuyNFT account={account} />} />
        <Route path="/carrotshop" element={<CarrotShop account={account} />} />
        <Route path="/nftdetail" element={<NFTDetail account={account} />} />
      </Routes>
    </>
  );
};

export default Membership;
