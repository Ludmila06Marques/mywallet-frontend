import styled from "styled-components"
import axios from "axios"
import { Link  , useNavigate} from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext } from "react"
export default function SignIn(){
    const {email , setEmail , password , setPassword    , setToken , setLogin  , setView , view}=useContext(userContext)

    const navigate= useNavigate()
    function signIn(){
        const body={ email , password }

        const promise= axios.post('https://drivenmywallet.herokuapp.com/sign-in' , body)
      
        promise
        .then(res=>{ 
            
           setLogin(res.data)
           setToken(res.data.token)                
            navigate("/home")   
              

           
        })    
        .catch(err=>{   
            if( err.response.status === 409) {
                return alert("usuario ja cadastrado")
            }
            
            
    
           
        })


    }

    function verSenha(){
        setView("text")
    }
    function esconderSenha(){
        setView("password")
    }
   

    return(
    <>
    <Container>
        <Title>MyWallet</Title>
        <InputEmail placeholder="E-mail"onChange={(e)=> setEmail(e.target.value)} value={email} ></InputEmail>
       <Group>
        {view==="password"?
         <IconEye onClick={verSenha}><ion-icon name="eye-outline"></ion-icon></IconEye>
        :
        <IconEye  onClick={esconderSenha}><ion-icon name="eye-off-outline"></ion-icon></IconEye>
        }
       
        <InputPassword placeholder="Senha "type={view} onChange={(e)=> setPassword(e.target.value)} value={password}></InputPassword>
        </Group>
       
        <SingInButton onClick={signIn} >Entrar</SingInButton>
        
        <Link to="/sign-up">
        <SingUpButton>Primeira vez? Cadastre-se!</SingUpButton>
        </Link>

    </Container>
    </>)
}

const Group=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;

`

const IconEye=styled.div`
position: absolute;
font-size: 25px;
right: 10px;
color: gray;

`
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
font-family: 'Saira Stencil One';
`
const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
color: 
#000000;
padding: 5px;
`
const InputPassword=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
color: 
#000000;
padding: 5px;


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
font-family: 'Raleway';
font-weight: bold;
`
const SingUpButton=styled.h3`
color: 
#FFFFFF;
font-size: 15px;
margin-top: 36px;
font-family: 'Raleway';
font-weight: bold;



`