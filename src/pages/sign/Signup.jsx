import React from 'react';
import '../../styles/style.css';
import { Input, Label, SignupStyle, UserSelectStyle, WelcomeStyle, WrapperStyle, SignUpSayStyle,SignupBtnStyle } from '../../styles/style';

export default function Signup() {
    return (
        <WrapperStyle>
            <SignupStyle>회원가입</SignupStyle>
            <WelcomeStyle>반갑습니다</WelcomeStyle>
            <Label>ID</Label>
            <Input type = "text" className = "id_input" placeholder = "id"></Input>
            <Label>PW</Label>
            <Input type = "password" className = "pw_input" placeholder = "password">
            </Input>
            <Label>회원유형</Label>
            <UserSelectStyle>
                <option value = "ghlwkd">회장</option>
                <option value = "qnghlwkd">부회장</option>
                <option value = "manager">집행부</option>
                <option value = "user">부원</option>
            </UserSelectStyle>
            <SignUpSayStyle>가입이 안됩니다</SignUpSayStyle>
            <SignupBtnStyle>가입(signup)</SignupBtnStyle>
        </WrapperStyle>
    );
}
