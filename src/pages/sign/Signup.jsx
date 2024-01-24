import React, { useState } from 'react';
import '../../styles/style.css';
import { Input, Label, SignupStyle, UserSelectStyle, WelcomeStyle, WrapperStyle, SignUpSayStyle,SignupBtnStyle } from '../../styles/style';

export default function Signup() {
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
    const [user, setUSER] = useState("");
    const handleUSERChange = (event) => {
        setUSER(event.target.value); 
        console.log(user);
    }   
    return (
        <WrapperStyle>
            <SignupStyle>회원가입</SignupStyle>
            <WelcomeStyle>반갑습니다</WelcomeStyle>
            <Label>ID</Label>
            <Input type = "text" className = "id_input" placeholder = "id" value = {id} onChange={handleIdChange}></Input>
            <Label>PW</Label>
            <Input type = "password" className = "pw_input" placeholder = "password" value = {pw} onChange={handlePWChange}>
            </Input>
            <Label>회원유형</Label>
            <UserSelectStyle value = {user} onChange={handleUSERChange}>
                <option value = "A">회장</option>
                <option value = "B">부회장</option>
                <option value = "C">집행부</option>
                <option value = "D">부원</option>
            </UserSelectStyle>
            <SignUpSayStyle>가입이 안됩니다</SignUpSayStyle>
            <SignupBtnStyle>가입(signup)</SignupBtnStyle>
        </WrapperStyle>
    );
}
