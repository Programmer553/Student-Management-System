

import React, { useEffect, useState } from 'react'
import { createStudent , getStudent, updateStudent } from '../service/StudentService'
import { useNavigate , useParams } from 'react-router-dom'


const StudentComponent = () => {
    const [name,setName]=useState('')
    const [email,setEmail] = useState('')

    const {id} = useParams();

    const [error,setError] = useState({
        name:"",
        email:""
    })

    const navigator = useNavigate()

    useEffect(()=>{
        if(id){
            getStudent(id).then((response)=>{
                setName(response.data.name)
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function handleName(e){
        setName(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }

    function addOrUpdateStudent(e){
        e.preventDefault();

        if(validateForm()){

            const student ={name,email}
            console.log(student)

            if(id){
                updateStudent(id,student).then(( response ) => {
                    console.log(response.data);
                    navigator('/students')
                }).catch(error =>{
                    console.error(error);
                })
            }else{

                createStudent(student).then((response) =>{
                    console.log(response.data)
                    navigator('/students')
                }).catch(error=>{
                    console.error(error);
                })
            }
        }
    }

    function validateForm(){
        let valid=true;

        const erroyCopy={...error}
        if(name.trim()){
            erroyCopy.name='';
        }else{
            erroyCopy.name='Name should not be Empty';
            valid=false;
        }
        if(email.trim()){
            erroyCopy.email='';
        }else{
            erroyCopy.email='Email should be required';
            valid=false;
        }
        setError(erroyCopy);
        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'> Update Student</h2>
        }else{
            <h2 className='text-center'> Add Student</h2>
        }
    }


  return (
    <div className='container'>
        <br /> <br />
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name:</label>
                            <input type="text" placeholder='Enter student name' 
                                value={name} className={`form-control ${ error.name ? 'is-invalid':'' }`}
                                onChange={handleName}
                            ></input>
                            {error.name && <div className='invalid-feedback'>{error.name}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input type="text" placeholder='Enter email' 
                                value={email} className={`form-control ${ error.name ? 'is-invalid':'' }`}
                                onChange={handleEmail}
                            />
                             {error.email && <div className='invalid-feedback'>{error.email}</div>}
                        </div>
                        <button className='btn btn-success' onClick={addOrUpdateStudent}>Submit</button>
                    </form>
                </div>
            </div>
        
      
    </div>
  )
}

export default StudentComponent
