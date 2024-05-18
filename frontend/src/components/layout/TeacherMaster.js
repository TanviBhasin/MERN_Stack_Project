import { Outlet } from "react-router-dom";
import TeacherHeader from "./TeacherHeader";
import Footer from "./Footer";

export default function TeacherMaster(){
    return(
        <>
        <TeacherHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}