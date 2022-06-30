import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Transations(){
    function deletar(){
   window.confirm("Deseja apagar a transacao?")
    }
  
    return(<> 
    <Register>
        <One >
            <Date>30/11</Date>
            <Name>Ludmila marques</Name>
            <Price>10,90</Price>

            <X onClick={deletar}>X</X>
        </One>
       
    </Register>
    <Footer>
        <Saldo>SALDO</Saldo>
        <Value>30000</Value>

    </Footer>
</>)
}
// <Text></Text>
const X=styled.h1`
margin-right: 10px;
color: #C6C6C6;
font-size: 16px;
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
margin-left: -40px;
font-family: 'raleway';
`
const Price=styled.div`
color:#C70000;
font-size: 16px;
padding: 15px;
font-family: 'raleway';

`
//#03AC00
const One=styled.div`
display: flex;
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

color: 
#868686;
font-size: 20px;


`