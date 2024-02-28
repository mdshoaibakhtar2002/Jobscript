import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Grid, TextField } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import { endpoint } from '../constant/constant_values';
import googleIcon from "../../img/googleG.png";
import { Typography } from '@mui/material';

export default function SignUp() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [newUserDetails, setNewUserDetails] = useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const pageChanger = (e, page) => {
    e.preventDefault();
    if (page === "createaccount" || page === "login") {
      navigate('/auth/')
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    setNewUserDetails({ ...newUserDetails, [e.target.name]: e.target.value })
  }
  const createUser = (e) => {
    e.preventDefault();
    dispatch(Loading(true))
    localStorage.setItem('newUserDetails', JSON.stringify(newUserDetails))
    // axios.post(endpoint+"/createuser",newUserDetails).then(res =>{
    //   if(res?.["status"] === 200){
    //     dispatch(Loading(false))
    //     navigate("/auth/")
    //   }
    // }).catch(() =>{
    //   dispatch(Loading(false))
    // })
    setTimeout(() => {
      dispatch(Loading(false))
      navigate("/auth/")
    }, 5000);
  }
  return (

    <Grid container height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid item xs={4} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}>
        {/* <Box>
          <img className='width' src={logo} alt='logo' />
        </Box> */}
        <Button sx={{margin:'1rem 0rem'}} variant='outlined'><img src={googleIcon} style={{width:'15px', marginRight:'10px'}}/>Continue with Google</Button>
        <Typography mb={2}>Or</Typography>
        <div className='flex-column'>
          <div className='space-between'>
            <TextField sx={{ width: "49%" }} name="firstName" required label="First Name" variant="outlined" onChange={(e) => handleChange(e)} />
            <TextField sx={{ width: "49%" }} name="lastName" label="Last Name" variant="outlined" onChange={(e) => handleChange(e)} />
          </div>
          <TextField sx={{ marginTop: MarginStyle.margintop2 }} label="Mobile No." name="mobileNumber" variant="outlined" onChange={(e) => handleChange(e)} />
          <TextField sx={{ marginTop: MarginStyle.margintop2 }} label="Email" name="email" variant="outlined" onChange={(e) => handleChange(e)} />
          <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
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
          <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
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
        <button style={{ marginTop: MarginStyle.margintop2 }} onClick={(e) => pageChanger(e, "login")}>Already have an account, log in</button>
        <Button fullWidth variant="contained" onClick={(e) => createUser(e)} style={ButtonStyle}>Sign Up</Button>
      </Grid>
    </Grid>
  )
}
