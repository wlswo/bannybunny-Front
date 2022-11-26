import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./history.css";

const History = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="history section__padding">
      <div className="history-container">
        <div className="navbar-history">
          <button onClick={goBack} className="primary-btn">
            Back
          </button>
          <button onClick={goHome} className="secondary-btn">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
