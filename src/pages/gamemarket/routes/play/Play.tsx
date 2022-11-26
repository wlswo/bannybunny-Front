import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./play.css";

interface PlayProps {
  account: string;
}

const Play: FC<PlayProps> = ({ account }) => {
  return (
    <>
      <div className="play-container">
        <div>여기는 게임플레이 하는 페이지</div>
        <Link to={`/gamemarket`}>
          <button>게임 메인</button>
        </Link>
      </div>
    </>
  );
};
export default Play;
