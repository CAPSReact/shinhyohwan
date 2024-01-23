import React from 'react';
import '../../styles/style.css';
import { WrapperStyle,SignupStyle, WelcomeStyle, Label, Input, SignUpSayStyle, SignupBtnStyle } from '../../styles/style';

export default function Signin() {
    return (
        <WrapperStyle>
            <SignupStyle>로그인</SignupStyle>
            <WelcomeStyle>반갑습니다.</WelcomeStyle>
            <Label>ID</Label>
            <Input type = "text" placeholder = "id"></Input>
            <Label>PW</Label>
            <Input type = "password" placeholder = "password" ></Input>
            
            <SignUpSayStyle>로그인이 가능합니다</SignUpSayStyle>
            <SignupBtnStyle>로그인(login)</SignupBtnStyle>
        </WrapperStyle>
    );
}
