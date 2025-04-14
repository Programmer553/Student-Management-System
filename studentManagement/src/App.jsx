import { useState } from 'react'
import './App.css'
import StudentsData from './components/studentsData'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentComponent from './components/StudentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<StudentsData />}> </Route>
          <Route path='/students' element={<StudentsData />} > </Route>
          <Route path='/addStudent' element={ <StudentComponent/> } />
          <Route path='/updateStudent/:id' element={<StudentComponent />} />
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
