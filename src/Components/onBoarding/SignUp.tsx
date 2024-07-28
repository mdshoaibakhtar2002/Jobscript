import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Grid, TextField, Stack } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Loading, setUserDetails } from '../../Redux/Reducer';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import googleIcon from "../../img/googleG.png";
import { Typography } from '@mui/material';
import React from 'react';
import { endpoint } from '../constant/constant_values';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function SignUp() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const [newUserDetails, setNewUserDetails] = useState({});
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickConfirmShowPassword = () => setConfirmShowPassword((show) => !show);
  const [disableButton, setDisableButton] = useState(true)
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
    if (activeButton) {
      newUserDetails['is_organization'] = 'true'
      newUserDetails['last_name'] = ''
      newUserDetails['job_id'] = []
      newUserDetails['password'] = ''
      newUserDetails['confirm_password'] = ''
    } else {
      newUserDetails['is_organization'] = 'false'
      newUserDetails['job_id'] = []
      newUserDetails['last_name'] = !newUserDetails['last_name'] ? '' : newUserDetails['last_name']
      newUserDetails['password'] = ''
      newUserDetails['confirm_password'] = ''
    }
    axios.post(endpoint + "/createuser", newUserDetails).then(res => {
      if (res?.['data']?.["statusCode"] === 200) {
        dispatch(Loading(false))
        dispatch(setUserDetails(newUserDetails))
        navigate("/auth/verifyOtp")
        toast.success("We've sent you a 6-digit SMS code. Please verify it.", { position: 'top-center' });
      } else {
        dispatch(Loading(false))
        toast.error("Something went wrong", { position: 'top-center' });
      }
    }).catch(() => {
      toast.error("Something went wrong", { position: 'top-center' });
      dispatch(Loading(false))
    })
  }

  const validate = () => {
    if (!newUserDetails?.['first_name'] || !newUserDetails?.['email'] || !newUserDetails?.['phone_number']) {
      setDisableButton(true)
    } else {
      setDisableButton(false)
    }
  }
  return (
    <Grid container spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px', marginTop: '0px' } }} columns={{ xs: 3.3, sm: 12, md: 20 }} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Grid item xs={4} sm={7} md={7} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'} sx={{
        '&.MuiGrid-item': {
          padding: '24px'
        },
        '.MuiGrid-root': {
          maxWidth: '100%'
        },
        '.MuiTypography-root': {
          fontSize: '15px',
          fontWeight: '600',
          color: '#4f4f4f',
          textAlign: 'left',
          marginBottom: '6px'
        }
      }}>
        <Grid item xs={12} mb={2} display={'flex'} justifyContent={'space-between'} maxWidth={'100% !important'} gap={1}>
          <Button fullWidth variant={activeButton ? 'contained' : 'outlined'} onClick={() => setActiveButton(true)}
            sx={
              activeButton ? {
                backgroundColor: '#ff5758',
                borderColor: '#ff5758',
                ':hover': {
                  backgroundColor: '#ff5758',
                  borderColor: '#ff5758'
                }
              } : {
                color: '#ff5758',
                borderColor: '#ff5758',
                ':hover': {
                  borderColor: '#ff5758'
                }
              }
            }
          >Company</Button>
          <Button fullWidth variant={!activeButton ? 'contained' : 'outlined'} onClick={() => setActiveButton(false)}
            sx={
              !activeButton ? {
                backgroundColor: '#ff5758',
                borderColor: '#ff5758',
                ':hover': {
                  backgroundColor: '#ff5758',
                  borderColor: '#ff5758'
                }
              } : {
                color: '#ff5758',
                borderColor: '#ff5758',
                ':hover': {
                  borderColor: '#ff5758',
                }
              }
            }
          >Employee</Button>
        </Grid>
        {activeButton ?
          <Grid item xs={12}>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Company name</Typography>
              <TextField
                size='small'
                placeholder='Company name'
                fullWidth
                name="first_name"
                required
                onChange={(e) => handleChange(e)}
                onBlur={() => validate()}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    fontSize: '13px',
                  }
                }}
              />
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Work email</Typography>
              <TextField
                size='small'
                placeholder='Work email'
                fullWidth
                name="email"
                onChange={(e) => handleChange(e)}
                onBlur={() => validate()}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    fontSize: '13px',
                  }
                }}
              />
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Mobile Number</Typography>
              <TextField
                size='small'
                placeholder='Mobile Number'
                fullWidth
                name="phone_number"
                onChange={(e) => handleChange(e)}
                onBlur={() => validate()}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    fontSize: '13px',
                  }
                }}
              />
            </Stack>
            {/* <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Password</Typography>
              <FormControl variant="outlined" >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                  size='small'
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
                  placeholder="Password"
                />
              </FormControl>
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Confirm password</Typography>
              <FormControl variant="outlined" >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirm_password"
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                  size='small'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickConfirmShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Confirm Password"
                />
              </FormControl>
            </Stack> */}
          </Grid> :
          <Grid item xs={12}>
            <Stack direction={'row'} width={'100%'} gap={2}>
              <Stack direction={'column'} width={'100%'} mb={2}>
                <Typography>First name</Typography>
                <TextField
                  size='small'
                  placeholder='First name'
                  fullWidth
                  name="first_name"
                  required
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                />
              </Stack>
              <Stack direction={'column'} width={'100%'}>
                <Typography>Last name</Typography>
                <TextField
                  size='small'
                  placeholder='Last name'
                  fullWidth
                  name="last_name"
                  required
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Email</Typography>
              <TextField
                size='small'
                placeholder='Email'
                fullWidth
                name="email"
                onChange={(e) => handleChange(e)}
                onBlur={() => validate()}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    fontSize: '13px',
                  }
                }}
              />
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Mobile Number</Typography>
              <TextField
                size='small'
                placeholder='Mobile Number'
                fullWidth
                type='number'
                name="phone_number"
                onChange={(e) => handleChange(e)}
                onBlur={() => validate()}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    fontSize: '13px',
                  }
                }}
              />
            </Stack>
            {/* <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Password</Typography>
              <FormControl variant="outlined" >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                  size='small'
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
                  placeholder="Password"
                />
              </FormControl>
            </Stack>
            <Stack direction={'column'} width={'100%'} mb={2}>
              <Typography>Confirm password</Typography>
              <FormControl variant="outlined" >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirm_password"
                  onChange={(e) => handleChange(e)}
                  onBlur={() => validate()}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      fontSize: '13px',
                    }
                  }}
                  size='small'
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickConfirmShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Confirm Password"
                />
              </FormControl>
            </Stack> */}
          </Grid>}
        <button onClick={(e) => pageChanger(e, "login")}>Already have an account, log in</button>
        {/* WARNING FOR THE DISABLE SX */}
        <Button fullWidth variant="contained" onClick={(e) => createUser(e)} style={ButtonStyle} disabled={disableButton} sx={disableButton && {
          background: 'rgb(255 124 125) !important',
          color: 'white !important',
        }}>Sign Up</Button>
        <Typography mb={2} mt={1} textAlign={'center !important'}>Or</Typography>
        <Button sx={{ margin: '0rem 0rem' }} variant='outlined'><img src={googleIcon} style={{ width: '15px', marginRight: '10px' }} />Continue with Google</Button>
      </Grid>
    </Grid>
  )
}
