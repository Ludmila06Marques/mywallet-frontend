import styled from "styled-components"
import { Link ,useNavigate} from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext } from "react"
import Transations from "./Transations"

export default function Home(){
    const {login , setEmail , setPassword}=useContext(userContext)

    const navigate= useNavigate()
    function sair(){
        setPassword("")
        setEmail("")
        navigate("/")
    }

    return(
    <>
    <Header>
        <Title>Olá , {login.userExist.name}</Title>
       
        <IconeExit onClick={sair} ><ion-icon name="exit-outline"></ion-icon></IconeExit>
       
    </Header>
    <Down>
       <Transations/>
    </Down>
    <Footer>
        <Link to="/in">  
        <New><ion-icon name="add-circle-outline"></ion-icon>
        <Text>Nova entrada</Text>
        </New>
        </Link>
        <Link to="/out">
        <New><ion-icon name="remove-circle-outline"></ion-icon>
        <Text>Nova saida </Text>
        
        </New>
        </Link>
    </Footer>

    
    
    </>)
}
const Text=styled.h1`
color: 
#FFFFFF;
font-size: 17px;
font-family: 'Raleway';
font-weight: bold;
max-width: 50px;

`
const New= styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
width: 
155px;
height: 114px;
background-color: 
#A328D6;
margin: 10px;
border-radius: 5px;
color: #FFFFFF;
font-size: 20px;

`
const Footer=styled.div`
display: flex;
justify-content: center;
align-items: center;
a{
    text-decoration: none;
}
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
font-family: 'Raleway';
font-weight: bold;
`
const IconeExit=styled.div`
color:#FFFFFF ;
font-size: 35px;
`