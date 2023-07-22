import React ,{ useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import Loding from "../components/Loding";

function Students() {
    const [loding,setLoding]=useState([true]);
    const [students,setStudents]=useState([]);
    
    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/student`).then(res=>{
            // console.log(res);

            setStudents(res.data.students);
            setLoding(false)

        });


    }, []);

    if(loding){
        return(
           <Loding/>
    )}
    var studentsDetails = "";
    studentsDetails = students.map((student,index)=>{
        return(
            <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td >
                    <Link className="btn btn-primary " to={`/student/update/${student.id}`}>Edit</Link>
                </td>
                <td >
                    <Link className="btn btn-danger " to="/">Delete</Link>
                </td>
            </tr>
        )

    });



  return (
    <div className="container mt-3">
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4>
                    Students List
                        <Link className="btn btn-primary float-end" to="/student/create">Add student</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                    <thead> 
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsDetails}
                    </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Students