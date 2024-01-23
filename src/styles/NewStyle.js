import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
margin: 0 auto;
width: 100%;
height: 100%;
min-height: 99vh;
display: flex;
flex-direction: column;
max-width: 390px;
background-color: #f9faff;
align-items: center;
text-align: center; 
`;

export const Title = styled.span`
font-size: 25px;
color: ${({theme}) => theme.colors.darkGray};
margin-top: 124px;
`

export const Introduce = styled.span`
font-size: 15px;
color: ${({theme}) => theme.colors.darkGray};
margin-top: 15px;
`

export const FlexLeft = styled.div`
text-align: left;
width: 80%;
margin-top: ${(props) => props.top};
`

export const Label = styled.label`
font-size: 15px;
color: ${({theme}) => theme.colors.darkGray};
margin-left: 10px;
`

export const Input = styled.input`
width: 80%;
height: 40px;
border: 1px solid ${({theme}) => theme.colors.darkGray};
border-radius: 8px;
`

export const Alert = styled.span`
font-size: 20px;
color: red;
margin-top: 67px;
`

export const Button = styled.button`
width: 55%;
padding: 15px;
color: ${({theme}) => theme.colors.white};
background-color: ${({theme}) => theme.colors.marin};
border-radius: 15px;
margin-top: 20px;
`