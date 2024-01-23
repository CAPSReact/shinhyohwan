import styled, { keyframes } from "styled-components";

const FadeIn = () => keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const WrapperStyle = styled.div`
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
    color: ${({theme}) => theme.colors.darkGray};   
`;

export const ContainerStyle = styled.div`
    width: 390px;
    height: 844px;
    background: #F9FAFF;
`;

export const SignupStyle = styled.h1`
    display: flex;
    width: 294px;
    height: 46px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: ${({theme}) => theme.colors.littleBlack};
    text-align: center;
    font-family: SejonghospitalBold;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: -17px;
    margin-top: 124px;
`;
export const WelcomeStyle = styled.h2`
    display: flex;
    width: 294px;
    height: 46px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: ${({theme}) => theme.colors.littleBlack};
    text-align: center;
    font-family: SejonghospitalBold;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

export const Label = styled.p`
    width: 304px;
    color: #333D42;
    font-family: SejonghospitalBold;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
`;

export const Input = styled.input`
    width: 274px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #333D42;
    background: ${({theme}) => theme.background.littleWhite};
    padding: 0 15px;
`

export const UserSelectStyle = styled.select`
    width: 304px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #2F88A4;
    background: ${({theme}) => theme.background.littleWhite};
    padding: 0 15px;
    font-family:SejonghospitalBold;
`

export const SignupBtnStyle = styled.button`
    display: flex;
    width: 200px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    background: ${({theme}) => theme.background.white};
    background-color: #11264F;
    text-align: right;
    font-family: SejonghospitalBold;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border:none;
    padding:0 45px;
    background: #2F88A4;
`

export const SignUpSayStyle = styled.p`
    display: flex;
    width: 294px;
    height: 46px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: ${({theme}) => theme.colors.littleRed};
    text-align: center;
    font-family: SejonghospitalBold;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top:125px;
`

export const ButtonStyle = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  animation: ${FadeIn} 2s ease-out;
  `;

// 같은 파일에 함께 선언한다.

export const Circle = styled.div`
		width: 50px;
		height: 50px;
		background-color: ${({ theme }) => theme.colors.gray};
		border-radius: 50px;
        animation: ${FadeIn} 2s ease-out;
`;