import axios from 'axios'

const BASE_API_URL='http://localhost:8080/api/students'
export const listStudents = ()=>{
    return axios.get(BASE_API_URL);
}

export const createStudent = (student) => axios.post(BASE_API_URL,student);

export const getStudent = (studentId) => axios.get(BASE_API_URL+'/'+studentId);

export const updateStudent = (studentId , student) => axios.put(BASE_API_URL+'/'+studentId,student);

export const deleteStudent = (studentId) => axios.delete(BASE_API_URL+'/'+studentId);