import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { CircularProgress, Stack } from "@mui/material";
import Footer from "./Components/Resuable/Footer";
import CircularLoader from "./Components/Resuable/CircularLoader";


function App() {
  const { isLoading } = useSelector(state => state.myAppState)
  const Test = () => {
    return (
      <Stack height={'100%'} width={'100%'}>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='/changepassword' element={<ChangePassword />} />
        </Routes>
      </Stack>
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
  // console.log(window.location.pathname)
  return (
    <Router>
      {isLoading && <CircularLoader color="secondary" style={{ position: 'fixed', top: '50%'}}/>}
      <CustomNavbar />
      <Stack display={isLoading && 'none'}>
        <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/fulltimejob" element={<Home />}></Route>
        <Route exact path='/auth/*' element={<Test />} />
      </Routes>
      {/* {!window.location.pathname.includes('/auth') &&  <Footer />} */}
      </Stack>
    </Router>
  )
}

export default App
