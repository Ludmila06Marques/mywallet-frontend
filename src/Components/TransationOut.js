import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Out(){
    return(<>
      <Header>
        <Title>Nova saida</Title>
        <IconeExit><ion-icon name="exit-outline"></ion-icon></IconeExit>
    </Header>
    <Down>
        <InputValue placeholder="Valor"/>
        <InputDescription placeholder="Descricao"/>
        <Link to="/home">
        <SaveButton>Salvar saida</SaveButton>
        </Link>

    </Down>
    </>)
}
const SaveButton= styled.button`
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
const InputDescription=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
`
const InputValue=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
`


const Down=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Header=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 78px;
padding: 20px;
`
const Title=styled.h1`
color: #FFFFFF;
font-size: 26px;
`
const IconeExit=styled.div`
color:#FFFFFF ;
font-size: 35px;
`