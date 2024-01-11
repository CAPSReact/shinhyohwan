import React, {useState} from 'react';
import '../../styles/style.css';

export default function Signup() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [userType, setUserType] = useState('');
    let isFormCompleted = (id != '' && pw != '' && userType != '');
    return (
        <div className='wrapper'>
            <h1 className = "signup">회원가입</h1>
            <h2 className = "welcome">반갑습니다.</h2>
            <p className = "id">ID</p>
            <input type = "text" className = "id_input" placeholder = "id" value={id} onChange={(e) => setId(e.target.value)}></input>
            <p className = "pw">PW</p>
            <input type = "password" className = "pw_input" placeholder = "password" value={pw} onChange={(e) => setPw(e.target.value)}></input>
            <p className = "user">회원 유형</p>
            <select className = "user_select" onChange={(e) => {setUserType(e.target.value)}} value={userType}>
                <option value = "ghlwkd">회장</option>
                <option value = "qnghlwkd">부회장</option>
                <option value = "manager">집행부</option>
                <option value = "user">부원</option>
            </select>
            <p className="signup_say" style={isFormCompleted? {color: "#8ED0F4"} : {color: "#ED1B24"}}>{isFormCompleted? '가입이 가능합니다.' : '모든 정보를 입력해주세요!' }</p>
            <button className = "signup_btn" disabled={!isFormCompleted}>가입(signup)</button>
        </div>
    );
}
