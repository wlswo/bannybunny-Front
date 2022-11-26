import React from "react";
import "./contents.css";
import nft from "../../assets/content.jpg";
import { Link } from "react-router-dom";

const Contents = ({ title }) => {
  const onServiceHandler = () => {
    alert("아직 준비중인 서비스입니다");
  };

  return (
    <div className="contents section__padding">
      <div className="contents-container">
        <div className="contents-container-text">
          <h1>{title}</h1>
        </div>

        <div className="contents-container-card">
          <div className="card-column">
            <div className="contents-card">
              <div className="contents-card-top">
                <Link to={`/membership/listnsell`}>
                  <img src={nft} alt="" />
                  <p className="contents-title">NFT</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-column">
            <div className="contents-card">
              <div className="contents-card-top">
                <Link to={`/gamemarket`}>
                  <img src={nft} alt="" />
                  <p className="contents-title">Game</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="card-column">
            <div className="contents-card" onClick={onServiceHandler}>
              <div className="contents-card-top">
                <Link to={`/membership/carrotshop`}>
                  <img src={nft} alt="" />
                  <p className="contents-title">CARROT Shop</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
