import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listnsell.css";

interface ListNSellProps {
  account: string;
}

const ListNSell: FC<ListNSellProps> = ({ account }) => {
  return (
    <>
      <div className="nftlist-container">
        <div>여기는 보유 NFT리스트 보여주는 페이지</div>
        <div>보유한 것들 중에서 팔고 싶은 것 가격 입력 후, 판매버튼 클릭</div>
        <Link to={`/membership/mint`}>
          <button>민팅</button>
        </Link>
        <Link to={`/membership/buynft`}>
          <button>판매</button>
        </Link>
        <Link to={`/membership`}>
          <button>멤버십 메인</button>
        </Link>
        <Link to={`/membership/nftdetail`}>
          <button>상세페이지</button>
        </Link>
      </div>
    </>
  );
};

export default ListNSell;
