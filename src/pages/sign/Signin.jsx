import React, {useState} from 'react';
import '../../styles/style.css';

export default function Signin() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    let isFormCompleted = (id != '' && pw != '');
    return (
        <div className='wrapper'>
            <h1 className = "signup">로그인</h1>
            <h2 className = "welcome">반갑습니다.</h2>
            <p className = "id">ID</p>
            <input type = "text" className = "id_input" placeholder = "id" value={id} onChange={(e) => setId(e.target.value)}></input>
            <p className = "pw">PW</p>
            <input type = "password" className = "pw_input" placeholder = "password" value={pw} onChange={(e) => setPw(e.target.value)}></input>
            
            <p className="signup_say" style={isFormCompleted? {color: "#8ED0F4"} : {color: "#ED1B24"}}>{isFormCompleted? '로그인이 가능합니다.' : '모든 정보를 입력해주세요!' }</p>
            <button className = "signup_btn" disabled={!isFormCompleted}>로그인(login)</button>
        </div>
    );
}
