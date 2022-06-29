import styled from "styled-components"
import { Link } from "react-router-dom"
import Transations from "./Transations"

export default function Home(){
    return(
    <>
    <Header>
        <Title>Olá, Fulano</Title>
        <IconeExit><ion-icon name="exit-outline"></ion-icon></IconeExit>
    </Header>
    <Down>
       <Transations/>
    </Down>
    <Footer>
        <Link to="/in">  
        <New></New>
        </Link>
        <Link to="/out">
        <New></New>
        </Link>
    </Footer>

    
    
    </>)
}
const New= styled.div`
width: 
155px;
height: 114px;
background-color: 
#A328D6;
margin: 10px;
border-radius: 5px;
`
const Footer=styled.div`
display: flex;
justify-content: center;
align-items: center;
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