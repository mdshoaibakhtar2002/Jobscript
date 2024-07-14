/* eslint-disable react/prop-types */
import { Button, Stack, TextField, Grid, Typography } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import googleIcon from "../../img/googleG.png";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import { Controller, useForm } from 'react-hook-form';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { endpoint } from '../constant/constant_values';
import { saveToken } from '../Utilities/HelperUtils';
import { toast } from 'react-toastify';
import { FormControl } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { IconButton, InputAdornment, InputLabel } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';


export default function LogIn(props) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loginCredentials, setLoginCredentials] = useState({})
    const [showPassword, setShowPassword] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(Math.floor(Math.random() * 11))
    const dispatch = useDispatch();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    let navigate = useNavigate()
    const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const DELAY = 1500;
    const onSubmit = (data) => {
        console.log(data);
    };
    const pageChanger = (e, page) => {
        e.preventDefault()
        if (props.floater) {
            props.setShowDrawer(!props.showDrawer)
        }
        if (page === "signin") {
            dispatch(Loading(true))
            axios.post(endpoint + "/authenticateuser", loginCredentials).then(res => {
                if (res?.["data"]?.["statusCode"] === 200) {
                    saveToken(res['data']['token'])
                    navigate('/')
                    dispatch(Loading(false))
                }
                else if (res?.["data"]?.["statusCode"] === 400) {
                    toast.error("Email and password are required", { position: 'top-center' });
                    dispatch(Loading(false))
                }
                else if (res?.["data"]?.["statusCode"] === 401) {
                    toast.error("Invalid email or password", { position: 'top-center' });
                    dispatch(Loading(false))
                }
                else if (res?.["data"]?.["statusCode"] === 500) {
                    toast.error("User not found", { position: 'top-center' });
                    dispatch(Loading(false))
                }
                else {
                    toast.error("Something went wrong", { position: 'top-center' });
                    dispatch(Loading(false))
                }
            }).catch((err) => {
                toast.error("Something went wrong", { position: 'top-center' });
                dispatch(Loading(false))
            })
        }
        if (page === "signup") {
            navigate("/auth/signup")
        }
        if (page === "forgotpassword") {
            navigate("/auth/forgotpassword")
        }

    }
    const handleLoginCredentials = (e) => {
        setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
    }
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (
        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px', marginTop: '0px' } }} columns={{ xs: 3.3, sm: 12, md: 20 }} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={3} sm={6} md={6} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}
                sx={{
                    '&.MuiGrid-item': { padding: '24px' },
                    '.MuiTypography-root': {
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#4f4f4f',
                        textAlign: 'left',
                        marginBottom: '6px'
                    }
                }}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <Stack direction={'column'} width={'100%'} mb={2}>
                                <Typography>Email</Typography>
                                <TextField
                                    size='small'
                                    placeholder='Email'
                                    fullWidth
                                    name="email"
                                    sx={{
                                        '& .MuiInputBase-input::placeholder': {
                                            fontSize: '13px',
                                        }
                                    }}
                                    onChange={(e) => handleLoginCredentials(e)}
                                />
                            </Stack>
                        )}
                    />
                    <Stack direction={'column'} width={'100%'} mb={2}>
                        <Typography>Password</Typography>
                        <FormControl variant="outlined" >
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                onChange={(e) => handleLoginCredentials(e)}
                                size='small'
                                sx={{
                                    '& .MuiInputBase-input::placeholder': {
                                        fontSize: '13px',
                                    }
                                }}
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
                    {(showCaptcha % 2 === 0) && <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <ReCAPTCHA
                            onChange={onChange}
                            sitekey={TEST_SITE_KEY}
                        />
                    </Box>}
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <Button onClick={(e) => pageChanger(e, "forgotpassword")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Forgot password</Button>
                        <Button onClick={(e) => pageChanger(e, "signup")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Create new account</Button>
                    </Stack>
                    <Button style={ButtonStyle} variant="contained" onClick={(e) => pageChanger(e, "signin")} type="submit" fullWidth disabled={!(loginCredentials?.['email'] && loginCredentials?.['password'])}
                        sx={!(loginCredentials?.['email'] && loginCredentials?.['password']) && {
                            background: 'rgb(255 124 125) !important',
                            color: 'white !important',
                        }}
                    >Sign In</Button>
                </form>
                <Typography mt={2} textAlign={'center !important'}>Or</Typography>
                <Button onClick={(e) => pageChanger(e, "signin")} sx={{ margin: '1rem 0rem' }} variant='outlined'><img src={googleIcon} style={{ width: '15px', marginRight: '10px' }} />Continue with Google</Button>
            </Grid>
        </Grid>
    )
}
