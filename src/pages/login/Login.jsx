import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../../_actions/user_action";

const Login = () => {
      
  return (
    <div className="login section__padding">
      <div className="login-container">
        <h1>Login</h1>
        <a href="http://localhost:3001/auth/kakao"><img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /></a>
        <a href="http://localhost:3001/auth/google"><img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1112/https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" /></a>
      </div>
    </div>
  );
};

export default Login;
