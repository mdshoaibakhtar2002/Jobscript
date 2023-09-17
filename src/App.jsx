import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Dashboard from '../src/Components/Dashboard'
import Home from "../src/Components/Home";
import CustomNavbar from "../src/Components/CustomNavbar";
import LogIn from "../src/Components/LogIn";
import SignUp from "../src/Components/SignUp";
import ForgotPassword from "../src/Components/Forgot_Password";
import ChangePassword from "../src/Components/Change_Password";
import LinearIndeterminate from "./Components/LinearProgressbar";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";


function App() {
  const {Loader} = useSelector(state => state.myAppState)
  const mainRef = useRef()
  const Test = () => {
    return (
      <div>
          <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/fulltimejob" element={<Home/>}></Route>
        </Routes>
      </div>
    )
  }
  useEffect(() =>{
    if(mainRef !== undefined && mainRef.current !== undefined){
      if (Loader) {
        mainRef.current.classList.add('transparent'); // Use .add method
      } else {
        mainRef.current.classList.remove('transparent'); // Use .remove method
      }
    }
  }, [])
  return (
    <Router>
      {Loader && <LinearIndeterminate/>}
     <div ref={mainRef} className='main-div'>
     <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='/changepassword' element={<ChangePassword />} />
          <Route exact path='/app/*' element={<Test />} />
        </Routes>
    </div>
      </Router>
  )
}

export default App
