import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp(){
    const navigate= useNavigate()

     function   cadastrar(){
        const body={email , name , password, confirm:confirmPass}
                
         const promise=   axios.post('http://localhost:5008/sign-up' , body)
      
        promise
        .then(res=>{ 

              navigate("/")
           
        })
      
        .catch(err=>{          
         
           
        })

       
    }


    const {email , setEmail , password , setPassword , name  , setName , confirmPass , setConfirmPass}=useContext(userContext)
    return(
    <>
    <Container>
    <Title>MyWallet</Title>
    <InputName placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name}></InputName>
    <InputEmail placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} value={email}></InputEmail>
    <InputPassword type="password"  placeholder="Senha"onChange={(e)=> setPassword(e.target.value)} value={password}></InputPassword>
    <InputConfirm type="password" placeholder="Confirme a senha"onChange={(e)=> setConfirmPass(e.target.value)} value={confirmPass}></InputConfirm>
   
     <SingUpButton onClick={cadastrar} >Cadastrar</SingUpButton>
    
     <Link to="/" >
     <Back>Já tem uma conta? Entre agora!</Back>
     </Link>
    
      

    </Container>
    </>)
}

const Back=styled.h3`
color: 
#FFFFFF;
font-size: 15px;
margin-top: 36px;
font-family: 'Raleway';
font-weight: bold;
`

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