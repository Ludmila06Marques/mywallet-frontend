import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import SingIn from "./Components/SingIn"
import SingUp from "./Components/SingUp"
import TransationIn from "./Components/TransationIn"
import TransationOut from "./Components/TransationOut"


export default function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<SingIn/>}></Route>
        <Route  path="/sing-up" element={<SingUp/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/in" element={<TransationIn/>}></Route>
        <Route  path="/out" element={<TransationOut/>}></Route>
      
        

    </Routes>    
    </BrowserRouter>)
}
//Post em sing in 
//Post em cadastrar