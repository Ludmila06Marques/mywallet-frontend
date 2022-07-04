import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import TransationIn from "./Components/TransationIn"
import TransationOut from "./Components/TransationOut"
import userContext from "../src/Contexts/UserContext"
import { useState } from "react"



export default function App(){
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [name , setName]=useState("")
    const [confirmPass , setConfirmPass]=useState("")
    const [enter, setEnter]=useState("")
    const [des , setDes]=useState("")
    const [login , setLogin]=useState()
    const [token , setToken]=useState()
    const [trans , setTrans]=useState([])
    const [saldo , setSaldo]=useState()
    
   
    return(
        <userContext.Provider value={{email, setEmail, password, setPassword , name, setName , confirmPass , setConfirmPass , enter , setEnter ,des , setDes , login ,setLogin , token , setToken , setTrans , trans , saldo , setSaldo}}>
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<SignIn/>}></Route>
        <Route  path="/sign-up" element={<SignUp/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/in" element={<TransationIn/>}></Route>
        <Route  path="/out" element={<TransationOut/>}></Route>
      
        

    </Routes>    
    </BrowserRouter>
    </userContext.Provider>)
}
