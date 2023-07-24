import './App.css'
import ResponsiveAppBar from './Components/Navbar'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/Forgot_Password';
import ChangePassword from './Components/Change_Password';
function App() {
  const Test = () => {
    return (
      <div>
        
        <ResponsiveAppBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    )
  }
  return (
    <div className='app'>
      < Router>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/forgotpassword' element={<ForgotPassword />} />
          <Route exact path='/changepassword' element={<ChangePassword />} />
          <Route exact path='/app/*' element={<Test />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
