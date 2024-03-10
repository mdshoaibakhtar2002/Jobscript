import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from "./Components/Home/Home.tsx";
import CustomNavbar from "./Components/Resuable/CustomNavbar";
import LogIn from "./Components/onBoarding/LogIn.tsx";
import SignUp from "./Components/onBoarding/SignUp.tsx";
import ForgotPassword from "./Components/onBoarding/ForgotPassword.tsx";
import ChangePassword from "./Components/onBoarding/ChangePassword.tsx";
import { useSelector } from "react-redux";
import { Divider, Stack } from "@mui/material";
import Footer from "./Components/Resuable/Footer";
import CircularLoader from "./Components/Resuable/CircularLoader";
import { ChatBubble } from "@mui/icons-material";


function App() {
  const { isLoading } = useSelector<any>(state => state.myAppState)
  const Test = () => {
    return (
      <Stack height={'100vh'} width={'100vw'} sx={isLoading ? { opacity: '0.3' } : { opacity: '1' }}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/changepassword' element={<ChangePassword />} />
        </Routes>
      </Stack>
    )
  }
  //NEED_TO_BE_FIXED:OnLoading i am able to scroll the page and do other actions
  return (
    <Router>
      {isLoading && <CircularLoader />}
      <CustomNavbar />
      <Stack sx={isLoading ? { opacity: '0.3', zIndex: '99999' } : { opacity: '1' }}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/fulltimejob" element={<Home />}></Route>
          <Route path='/auth/*' element={<Test />} />
        </Routes>
        {!(window.location.pathname).includes('/auth') && <Footer />}
      </Stack>
    </Router>
  )
}

export default App
