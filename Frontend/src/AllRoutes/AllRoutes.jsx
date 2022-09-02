import { Route, Routes } from "react-router-dom"
import { SignUp } from "../Pages/SignUp/SignUp"




export const AllRoutes = () => {

    return(

        <>
        <Routes>
            <Route path="/" element={} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/" element={} />
        </Routes>
        </>
    )
}