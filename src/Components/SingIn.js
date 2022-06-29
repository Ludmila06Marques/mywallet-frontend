import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SingIn(){
    return(
    <>
    <Container>
        <Title>MyWallet</Title>
        <InputEmail placeholder="E-mail"></InputEmail>
        <InputPassword placeholder="Senha"></InputPassword>
        <Link to="/home">
        <SingInButton>Entrar</SingInButton>
        </Link>
        <Link to="/sing-up">
        <SingUpButton>Primeira vez? Cadastre-se!</SingUpButton>
        </Link>

    </Container>
    </>)
}

const Container=styled.div`
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
`
const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
`
const InputPassword=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
`

const SingInButton= styled.button`
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

`
const SingUpButton=styled.h3`
color: 
#FFFFFF;
font-size: 15px;
margin-top: 36px;

`