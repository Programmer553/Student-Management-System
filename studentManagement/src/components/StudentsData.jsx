import React, { useEffect, useState } from 'react'
import { deleteStudent, listStudents } from '../service/StudentService';
import { useNavigate } from 'react-router-dom';
import styles from './StudentsData.module.css';


const StudentsData = () => {
    const [stud,setStud] = useState([]);
    const navigator = useNavigate()

    useEffect(()=>{
        getAllStudents();
    },[])

    function getAllStudents(){
        listStudents().then((res)=>{
            setStud(res.data);
        }).catch(error =>{
            console.error(error);
        })
    }

    function addStudent(){
        navigator('/addStudent')
    }

    function updateStudent(id){
        navigator(`/updateStudent/${id}`)
    }

    function deleteStud(id){
        console.log(id)
        deleteStudent(id).then((response)=>{
            getAllStudents();
        }).catch(error=>{
            console.error(error)
        })
    }


  return (
    <div className='container'>  
    <h1 className={`text-center ${styles.title}`}>Students Data</h1>
    <button onClick={addStudent} className='btn btn-warning'>Add Student</button>
    <table className="table table-bordered table-dark">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                stud.map((student=>
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><button className={styles.update} onClick={()=>updateStudent(student.id)}>Update</button>
                        <button className={styles.delete} onClick={()=>deleteStud(student.id)}>Delete</button></td>
                    </tr>)
                )
                
            }
            <tr></tr>
        </tbody>
    </table>
    
    </div>
  )
}

export default StudentsData
