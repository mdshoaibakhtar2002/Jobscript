import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import '../Style/Stylesheet.css'
import '../Style/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../Images/logo.png";
import { useNavigate } from 'react-router';
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
  return (
    <div className="login">
      <div className='padding-right'>
        <img className='width' src={logo} alt='logo' />
      </div>
      <div className='flex-column'>
        <div className='space-between'>
          <FormControl id="cred-field">
            <TextField label="First Name" variant="outlined" size="small" defaultValue="Elvish" />
          </FormControl>
          <FormControl id="cred-field">
            <TextField label="Last Name" variant="outlined" size="small" defaultValue="Khandelwal" />
          </FormControl>
        </div>
        <FormControl id="cred-field">
            <TextField label="Mobile No." variant="outlined" size="small" defaultValue="+1254879894" />
          </FormControl>
        <FormControl id="cred-field">
          <TextField label="Email" variant="outlined" size="small" defaultValue="imdshoaibakhtar@opp.com" />
        </FormControl>
        <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            defaultValue="786@imdshoaibakhtar"
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
            defaultValue="786@imdshoaibakhtar"
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
        <Button variant="contained" onClick={(e) => pageChanger(e, "createaccount")} className='margin width dark'>Sign Up</Button>
      </div>
    </div>
  )
}
