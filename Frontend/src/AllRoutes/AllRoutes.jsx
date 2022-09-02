import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/Navbar/Navbar"
import { Login } from "../Pages/Login/Login"
import { SignUp } from "../Pages/SignUp/SignUp"




export const AllRoutes = () => {

    return(

        <>
        <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </>
    )
}