import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import SingIn from "./Components/SingIn"
import SingUp from "./Components/SingUp"
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
    
  


    return(
        <userContext.Provider value={{email, setEmail, password, setPassword , name, setName , confirmPass , setConfirmPass , enter , setEnter ,des , setDes , login ,setLogin , token , setToken}}>
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<SingIn/>}></Route>
        <Route  path="/sing-up" element={<SingUp/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/in" element={<TransationIn/>}></Route>
        <Route  path="/out" element={<TransationOut/>}></Route>
      
        

    </Routes>    
    </BrowserRouter>
    </userContext.Provider>)
}
