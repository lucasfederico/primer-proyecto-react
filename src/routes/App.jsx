import {Routes, Route, Navigate} from "react-router-dom"
import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"

export default function App(){
    return (
        <>
        <Header></Header>


        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/*" element={<Navigate to='/' ></Navigate>}></Route>
        </Routes>
        </>
    )
}