import '../App.css';
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Students from "../pages/Students";
import CreateStudent from "../pages/CreateStudent";
import UpdateStudent from "../pages/UpdateStudent";



function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<About/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/student/create" element={<CreateStudent/>}/>
            <Route path="/student/update/:id" element={<UpdateStudent/>}/>

        </Routes>
    )

}
export default MyRouter