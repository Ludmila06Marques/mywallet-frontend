import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext } from "react"
import dayjs from "dayjs"
import axios from "axios"


export default function Out(){
    const  {des , setDes , token , enter , setEnter }=useContext(userContext)
    const navigate=useNavigate()

    function newTransation(){
        const config={
            headers:{
            Authorization:`Bearer ${token}`
            }
        }
        const body={
            value:parseInt(enter),
            description:des,
            type:"out"
           
        }
        const promise= axios.post('http://localhost:5000/transations' , config , body)
        promise
        .then(res=>{ 
            console.log(res.data)
       navigate('/home')
        })    
        .catch(err=>{          
          console.log(err)
           
        })

    }
    return(<>
      <Header>
        <Title>Nova saida</Title>
        <IconeExit>
            <Link to="/home">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </Link>
            </IconeExit>
    </Header>
    <Down>
        <InputValue placeholder="Valor" onChange={(e)=> setEnter(e.target.value)} value={enter}/>
        <InputDescription placeholder="Descricao"  onChange={(e)=> setDes(e.target.value)} value={des}/>
        <Link to="/home">
        <SaveButton onClick={newTransation} >Salvar saida</SaveButton>
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
a{
    text-decoration: none;
}
`