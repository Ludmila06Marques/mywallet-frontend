import styled from "styled-components"
import userContext from "../Contexts/UserContext"
import { useContext , useEffect } from "react"
import axios from "axios"

function OneTransation({date , value , des ,type}){
    function deletar(){
        window.confirm("Deseja apagar a transacao?")
         }
        
    return(<>
    <Container>
        <Date>{date}</Date>
        <Description>{des}</Description>
        <Deposit type={type}  >{value}</Deposit>
        <Delete onClick={deletar} >X</Delete>
     </Container>
    </>)
}

export default function Transations(){
   
    const {token  , trans , setTrans  , saldo , setSaldo}=useContext(userContext)

    useEffect(()=>{

        async function pegarSaldo(){
             const config={
                 headers:{
                 authorization:`Bearer ${token}`
                 }
             }
             try {
                 
                 
                     const promise = await axios.get('https://drivenmywallet.herokuapp.com/saldo' , config )
                     setSaldo(promise.data.saldo)
                  
                    
     
             } catch (error) {
                alert(error)
            
             }   
         }
         pegarSaldo()
     },[setSaldo , token ])
   
   
    useEffect(()=>{

   async function pegarTransacoes(){
        const config={
            headers:{
            authorization:`Bearer ${token}`
            }
        }
        try {
            
            
                const promise = await axios.get('https://drivenmywallet.herokuapp.com/transations' , config )
                setTrans([...promise.data])   
                //calculo das entradas
               

        } catch (error) {
            console.log(error)
       
        }   
    }
    pegarTransacoes()
   
},[ setTrans , token])


  
  
 
  
    return(<>
     {trans.length!==0?
     <Register>
     <One >
     {trans.map((item , index)=><OneTransation key={index} index={index}  date={item.date}  des={item.description} value={item.value} type={item.type} />)}
        

        
     </One>
    
 </Register> : <RegisterO>
    <Text>Voce nao tem nenhuma transacao</Text>
 </RegisterO>
    }

    
    <Footer>
        <Saldo>SALDO</Saldo>
        <Value>{saldo}</Value>

    </Footer>
</>)
}

const Container=styled.div`
display: flex;
`
const Date=styled.div`
width: 60px;
height: 100%;

margin-bottom: 20px;
margin-left: 10px;
color: #C6C6C6;
font-size: 16px;
font-family: 'raleway';
`
const Description = styled.div`
width: 180px;

margin-bottom: 20px;
height: 100%;
color: black;
font-size: 16px;
font-family: 'raleway';

`

const Deposit = styled.div`
width: 60px;
margin-bottom: 20px;
height: 100%;
color:${props => props.type ==="in" ? "#03AC00": "#C70000"};
font-size: 16px;
font-family: 'raleway';
`
const Delete=styled.div`
width: 15px;

margin-bottom: 20px;
height: 100%;
margin-right: 10px;
color: #C6C6C6;
font-size: 16px;

`


// <Text></Text>
const RegisterO=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 325px;
height: 400px;
background-color: 
#FFFFFF;
border-radius:  5px 5px 0px 0px;
`

const Value=styled.h1`
font-size: 17px;
color: 
#03AC00;
font-weight: bold;
font-family: 'raleway';


`
const Saldo=styled.h1`
font-size: 17px;
color: 
#000000;
font-weight: bold;
font-family: 'raleway';
`
const Footer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
width: 325px;
height: 46px;
background-color: 
#FFFFFF;
border-radius: 0px 0px 5px 5px;
`

//#03AC00
const One=styled.div`


margin-top: 23px;

`
const Register=styled.div`
width: 325px;
height: 400px;
background-color: 
#FFFFFF;
border-radius:  5px 5px 0px 0px;
overflow-y: scroll;
`
const Text=styled.h2`
max-width: 200px;
text-align: center;
color: 
#868686;
font-size: 20px;


`