import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import '../Custom-css/Stylesheet.css'
import '../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../img/logo.png";
import { useNavigate } from 'react-router';
import axios from 'axios';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  let dictionary = {};
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  let navigate = useNavigate()
  const pageChanger = (e, page) => {
    e.preventDefault();
    if(page === "createaccount" || page === "login"){
      navigate('/')
    }
  }
  const handleChange = (e) =>{
    e.preventDefault();
    dictionary[e.target.name] = e.target.value
  }
  const createUser = (e) =>{
    e.preventDefault();
    console.log(dictionary)
    axios.post("http://localhost:3000/api/createuser",dictionary).then(res =>{
      console.log("Res", res)
    }).catch((err) =>{
      console.log(err)
    })
  }
  return (
    <div className="login signup">
      <div className='padding-right'>
        <img className='width' src={logo} alt='logo' />
      </div>
      <div className='flex-column'>
        <div className='space-between'>
          <FormControl id="cred-field">
            <TextField name = "firstName" required label="First Name" variant="outlined" size="small" onChange={(e) => handleChange(e)} />
          </FormControl>
          <FormControl id="cred-field">
            <TextField name = "lastName" label="Last Name" variant="outlined" size="small" onChange={(e) => handleChange(e)}/>
          </FormControl>
        </div>
        <FormControl id="cred-field">
            <TextField label="Mobile No." name = "mobileNumber" variant="outlined" size="small" onChange={(e) => handleChange(e)}/>
          </FormControl>
        <FormControl id="cred-field">
          <TextField label="Email" name="email" variant="outlined" size="small" onChange={(e) => handleChange(e)}/>
        </FormControl>
        <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name = "password"
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name ="confirmPassword"
            onChange={(e) => handleChange(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </div>
      <div className='login-option'>
        <button onClick={(e) => pageChanger(e, "login")}>Already have an account, log in</button>
      </div>
      <div className='padding'>
        <Button variant="contained" onClick={(e) => createUser(e)} className='margin width dark'>Sign Up</Button>
      </div>
    </div>
  )
}
