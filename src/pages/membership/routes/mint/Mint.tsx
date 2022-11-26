import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mint.css";

interface MintProps {
  account: string;
}

const Mint: FC<MintProps> = ({ account }) => {
  return (
    <>
      <div>여기는 민팅 페이지</div>
      <div>메타마스크 연동 필요</div>
      <div>민팅 버튼으로 민팅(어느 토끼가 나올까요?)</div>
      <Link to={`/membership/listnsell`}>
        <button>목록</button>
      </Link>
    </>
  );
};

export default Mint;
