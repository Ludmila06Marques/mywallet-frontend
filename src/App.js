import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingIn from "./Components/SingIn"
import SingUp from "./Components/SingUp"

export default function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<SingIn/>}></Route>
        <Route  path="/sing-up" element={<SingUp/>}></Route>
        

    </Routes>    
    </BrowserRouter>)
}
//Post em sing in 