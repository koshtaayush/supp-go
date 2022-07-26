import React, { useState, useEffect } from "react";
import "../App.css";

import { renderButton, checkSignedIn } from "../utils/authUtils";

import styled from "styled-components";

import { BrowserRouter as Router, Route, Redirect, Routes } from "react-router-dom";

import Logo from './Logo'
import Home from "../Screens/Home";
import Header from "./Header";
import AddQuestion from "../Screens/AddQuestion";

function App({props}) {  
  const [isSignedIn, setIsSignedIn] = useState(false);

  console.log('props',props)

  const updateSignin = (signedIn) => {
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init);
  });
  console.log("sin", isSignedIn);
  if (isSignedIn) {
  //  props.history.push('/home');
  }
  return (
    <div className="App">
      {!isSignedIn ? (
        <>
          <Header />
          <Wrapper>
            <LeftSection>
              <video
                src={
                  "https://meesho.io/img/life-at-meesho/life-at-meesho-sm.mp4"
                }
                width="600"
                height="600"
                autoPlay loop muted
              ></video>
            </LeftSection>
            <RightSection>
              <ButtonContainer>
                <div id="signin-button"></div>
              </ButtonContainer>
            </RightSection>
          </Wrapper>
        </>
      ): <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddQuestion />} />
      {/* <Route path="/home" element={<Home />} /> */}
   </Routes>}
    </div>
  );
}

export default App;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin-top: 0;
  font-family: "Raleway", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  height: calc(100vh - 88px);
`;

const LeftVideo = styled.video`
  display: flex;
  width: 500px;
  height: 100px;
  justify-content: center;
  margin-top: 0;
  margin-top: -4rem;
`;

const RightSection = styled.div`
  width: 50%
`;

const LeftSection = styled.div`
  text-align: start;
  width: 50%
`;
