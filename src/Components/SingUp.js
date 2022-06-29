import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SingUp(){
    return(
    <>
    <Container>
    <Title>MyWallet</Title>
    <InputName placeholder="Name"></InputName>
    <InputEmail placeholder="E-mail"></InputEmail>
    <InputPassword type="password" placeholder="Senha"></InputPassword>
    <InputConfirm type="password" placeholder="Confirme a senha"></InputConfirm>
    <Link to="/">
     <SingUpButton>Cadastrar</SingUpButton>
     </Link>
      

    </Container>
    </>)
}
const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
a{
    text-decoration: none;
}
`
const Title = styled.h1`
color: #FFFFFF;
font-size: 32px;
margin-top: 159px;
margin-bottom: 24px;
font-family: 'Saira Stencil One';

`
const InputName=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
`

const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
`
const InputPassword=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
margin-bottom: 13px;
padding: 5px;
`
const InputConfirm=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
padding: 5px;

`

const SingUpButton= styled.button`
background-color: 
#A328D6;
color:#FFFFFF ;
font-size: 20px;
width: 
326px;
height: 46px;
border-radius: 5px;
border: 1px solid #A328D6;
margin-top: 13px;
font-family: 'Raleway';
font-weight: bold;

`