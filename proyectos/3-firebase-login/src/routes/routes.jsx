import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Login } from "../components/login/Login";
import { Home } from "../components/home/Home";
import { SignUp } from "../components/signUp/SignUp";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/> 
                <Route exact path="/signup" element={<SignUp/>}/>
            </Routes>
        </Router>
    )
}