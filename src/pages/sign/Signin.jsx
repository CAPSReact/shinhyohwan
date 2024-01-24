import React, { useState } from 'react';
import '../../styles/style.css';
import { WrapperStyle,SignupStyle, WelcomeStyle, Label, Input, SignUpSayStyle, SignupBtnStyle } from '../../styles/style';

export default function Signin() {
    const [id, setId] = useState("");
    const handleIdChange = (event) => {
        setId(event.target.value); 
        console.log(id);
    } 
    const [pw, setPW] = useState("");
    const handlePWChange = (event) => {
        setPW(event.target.value); 
        console.log(pw);
    }   
    return (
        <WrapperStyle>
            <SignupStyle>로그인</SignupStyle>
            <WelcomeStyle>반갑습니다.</WelcomeStyle>
            <Label>ID</Label>
            <Input type = "text" placeholder = "id" value = {id} onChange={handleIdChange}></Input>
            <Label>PW</Label>
            <Input type = "password" placeholder = "password" value = {pw} onChange={handlePWChange}></Input>
            
            <SignUpSayStyle>로그인이 가능합니다</SignUpSayStyle>
            <SignupBtnStyle>로그인(login)</SignupBtnStyle>
        </WrapperStyle>
    );
}
