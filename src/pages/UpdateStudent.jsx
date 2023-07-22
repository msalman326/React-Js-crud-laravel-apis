import { useEffect, useState } from "react";

import { Link, useNavigate, useParams,  } from "react-router-dom";
import Loding from "../components/Loding";
import axios from "axios";

function UpdateStudent() {
    let {id}=  useParams();
const navigate =useNavigate();
    const [loding, setLoding] = useState(true);
    const [inputErrorsList, setInputErrorsList] = useState({});
    const [student, setStudent] = useState({});

    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/student/${id}`).then(res=>{
            // console.log(res);

            setStudent(res.data.student);
            setLoding(false)

        }).catch(function (errors) {
            if (errors.response) {
              
              if (errors.response.status === 404) {
                alert(errors.response.data.message);
                setLoding(false);
                
              }
              if (errors.response.status === 500) {
                alert(errors.response.data);
                setLoding(false);
              }
              
            }
          });


    }, [id]);

      const handleInput = (e) => {
        e.persist();
        setStudent({ ...student, [e.target.name]: e.target.value });
      };
      const updateStudent = (e) => {
        e.preventDefault();
        setLoding(true);
        const data = {
          name: student.name,
          email: student.email,
          course: student.course,
          phone: student.phone,
        };
        axios
          .put(`http://127.0.0.1:8000/api/student/edit/${id}`, data)
          .then((res) => {
            alert(res.data.message);
            navigate('/students')
            setLoding(false);
          })
          .catch(function (errors) {
            if (errors.response) {
              if (errors.response.status === 422) {
                setInputErrorsList(errors.response.data.error);
                setLoding(false);
              }
              if (errors.response.status === 404) {
                alert(errors.response.data.error);
                setLoding(false);
              }
              if (errors.response.status === 500) {
                alert(errors.response.data);
                setLoding(false);
              }
            }
          });
      };
      if(loding){
        return(
            <Loding/>
        )
      }
      if(Object.keys(student).length === 0){
        return(
            <div className="container mt-3  ">
                <div className="row ">
                <div className="col-md-12">
                    <div className="card border border-danger">
                    <div className="card-header">
                  <h4 className="text-danger">
                    No Student Found
                    <Link className=" cbtn btn btn-outline-danger  float-end" to="/students">
                      Go To Students
                    </Link>
                  </h4>
                </div>
                </div>
                    </div>
                </div>
            </div>
        )
      }
    
      return (
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4>
                    Update Student Details
                    <Link className="btn btn-primary float-end" to="/students">
                      Students List
                    </Link>
                  </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={updateStudent}>
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        placeholder="Enter your name"
                        value={student.name}
                        onChange={handleInput}
                        type="text"
                        name="name"
                        className="form-control"
                        id=""
                      />
                      <span className="text-danger">{inputErrorsList.name}</span>
                    </div>
                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        placeholder="Enter your email"
                        value={student.email}
                        onChange={handleInput}
                        type="email"
                        name="email"
                        className="form-control"
                        id=""
                      />
                      <span className="text-danger">{inputErrorsList.email}</span>
                    </div>
                    <div className="mb-3">
                      <label>Course</label>
    
                      <input
                        placeholder="Enter your course"
                        value={student.course}
                        onChange={handleInput}
                        type="text"
                        name="course"
                        className="form-control"
                        id=""
                      />
                      <span className="text-danger">{inputErrorsList.course}</span>
                    </div>
                    <div className="mb-3">
                      <label>Phone</label>
                      <input
                        placeholder="Enter your contact of 11 digits"
                        value={student.phone}
                        onChange={handleInput}
                        type="number"
                        name="phone"
                        className="form-control"
                        id=""
                      />
                      <span className="text-danger">{inputErrorsList.phone}</span>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="col-md-12 btn btn-success">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default UpdateStudent