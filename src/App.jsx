import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from "../src/Components/Home/Home";
import CustomNavbar from "./Components/Resuable/CustomNavbar";
import LogIn from "./Components/onBoarding/LogIn";
import SignUp from "./Components/onBoarding/SignUp";
import ForgotPassword from "./Components/onBoarding/ForgotPassword";
import ChangePassword from "./Components/onBoarding/ChangePassword";
import LinearIndeterminate from "./Components/Resuable/LinearProgressbar";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import Footer from "./Components/Resuable/Footer";
// import { useRef } from "react";
// import { useEffect } from "react";


function App() {
  const {Loader} = useSelector(state => state.myAppState)
  // const mainRef = useRef()
  const Test = () => {
    return (
      <div>
          <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/fulltimejob" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>
    )
  }
  // useEffect(() =>{
  //   if(mainRef !== undefined && mainRef.current !== undefined){
  //     if (Loader) {
  //       mainRef.current.classList.add('transparent'); // Use .add method
  //     } else {
  //       mainRef.current.classList.remove('transparent'); // Use .remove method
  //     }
  //   }
  // }, [Loader])
  return (
    <Router>
      {Loader && <LinearIndeterminate/>}
     <Stack height={'100%'} width={'100%'}>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='/changepassword' element={<ChangePassword />} />
          <Route exact path='/app/*' element={<Test />} />
        </Routes>
    </Stack>
      </Router>
  )
}

export default App
