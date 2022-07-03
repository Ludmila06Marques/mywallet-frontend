import styled from "styled-components"
import { Link } from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext   } from "react"
import dayjs from "dayjs"
import {useNavigate} from 'react-router-dom'
import axios from "axios"

//valor , cescricao  , hora , tipo
// mandar o preco como number


export default function SaveTransation(){
    const navigate = useNavigate()
    const {enter , setEnter , des , setDes , token , setTrans , trans}=useContext(userContext)

   async function newTransation(){
        const body={
            value:parseFloat(enter),
            description:des,
            type:"in"
        }
        const headers={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }
     
        try {
             await axios.post('http://localhost:5008/transations' , body, headers )
             setDes("")
            setEnter("")
             navigate('/home')
        } catch (error) {
            console.log("An error occurred.");
            console.log(error);
        }
       

    }


    return(<>
      <Header>
        <Title>Nova entrada</Title>
        <IconeExit>  <Link to="/home">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </Link></IconeExit>
    </Header>
    <Down>
        <InputValue placeholder="Valor" onChange={(e)=> setEnter(e.target.value)} value={enter}/>
        <InputDescription placeholder="Descricao" onChange={(e)=> setDes(e.target.value)} value={des}/>
       
        <SaveButton onClick={newTransation} >Salvar entrada</SaveButton>
       

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
font-weight: bold;

`
const InputDescription=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
color: #000000;
padding: 5px;
`
const InputValue=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
color: #000000;
padding: 5px;
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