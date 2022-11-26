import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nftdetail.css";

interface NFTDetailProps {
  account: string;
}

const NFTDetail: FC<NFTDetailProps> = () => {
  return (
    <>
      <div>여기는 NFT 상세 페이지</div>
      <Link to={`/membership/listnsell`}>
        <button>목록</button>
      </Link>
    </>
  );
};
export default NFTDetail;
