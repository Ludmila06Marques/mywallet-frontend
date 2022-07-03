import styled from "styled-components"
import { Link } from "react-router-dom"
import userContext from "../Contexts/UserContext"
import { useContext , useEffect, useState } from "react"
import axios from "axios"

function OneTransation({date , value , des ,type}){
    function deletar(){
        window.confirm("Deseja apagar a transacao?")
         }
         console.log(type)
    return(<>
 <Container>
     <Date>{date}</Date>
         <Name>{des}</Name>
         <Price type={type}  >{value}</Price>
         <X onClick={deletar}>X</X>
         </Container>
    </>)
}

export default function Transations(){
   
    const {token , login , trans , setTrans  , saldo , setSaldo}=useContext(userContext)

    useEffect(()=>{

        async function pegarSaldo(){
             const config={
                 headers:{
                 authorization:`Bearer ${token}`
                 }
             }
             try {
                 
                 
                     const promise = await axios.get('http://localhost:5008/saldo' , config )
                     setSaldo(promise.data.saldo)
                   console.log(promise.data)
                    
     
             } catch (error) {
                 console.log(error)
            
             }   
         }
         pegarSaldo()
     },[ ])
   
   
    useEffect(()=>{

   async function pegarTransacoes(){
        const config={
            headers:{
            authorization:`Bearer ${token}`
            }
        }
        try {
            
            
                const promise = await axios.get('http://localhost:5008/transations' , config )
                setTrans([...promise.data])   
                //calculo das entradas
               

        } catch (error) {
            console.log(error)
       
        }   
    }
    pegarTransacoes()
   
},[ ])


  
    //data
    //conceito
    //preco
    //type

  
 
  
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
display:flex;
align-items: center;
width: 100%;
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
const X=styled.h1`
margin-right: 10px;
color: #C6C6C6;
font-size: 16px;
position: fixed;
right: 30px;
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
const Date=styled.div`
color: #C6C6C6;
font-size: 16px;
padding: 15px;
font-family: 'raleway';

`
const Name=styled.div`
color:#000000;
font-size: 16px;
padding: 15px;
font-family: 'raleway';
`
const Price=styled.div`
color:${props => props.type =="in" ? "#03AC00": "#C70000"};
font-size: 16px;
padding: 15px;
font-family: 'raleway';
position: fixed;
right: 50px;

`
//#03AC00
const One=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

margin-top: 23px;

`
const Register=styled.div`
width: 325px;
height: 400px;
background-color: 
#FFFFFF;
border-radius:  5px 5px 0px 0px;
`
const Text=styled.h2`
max-width: 200px;
text-align: center;
color: 
#868686;
font-size: 20px;


`