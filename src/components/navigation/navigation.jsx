import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../../styles/NaviStyle";
import { NavigationBar, BtnBox, InSideBtn,OutSideBtn, BoardBtn, ProfileBtn } from "../../styles/NaviStyle";


export default function Navigation() {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate("/home");
    };
  
    return (
      <Wrapper>
        <NavigationBar>
            <BtnBox onClick={() => { navigate('/Signin'); }}>
            <OutSideBtn />
            Signin
            </BtnBox>
            <BtnBox onClick={() => { navigate('/Signup'); }}>
            <InSideBtn />
            Signup
            </BtnBox>
            <BtnBox onClick={() => { navigate('/House'); }}>
            <BoardBtn />
            home
            </BtnBox>
            <BtnBox onClick={() => { navigate('/InSide'); }}>
            <ProfileBtn />
            home
            </BtnBox>
        </NavigationBar>
      </Wrapper>
    );
  }