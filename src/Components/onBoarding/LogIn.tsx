/* eslint-disable react/prop-types */
import { Button, Stack, TextField, Grid, Typography } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
// import logo from "../../img/logo.png";
import googleIcon from "../../img/googleG.png";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import { Controller, useForm } from 'react-hook-form';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import ReCAPTCHA from 'react-google-recaptcha';
import { Box } from '@mui/material';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';

export default function LogIn(props) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loginCredentials, setLoginCredentials] = useState({})
    const [showCaptcha, setShowCaptcha] = useState(Math.floor(Math.random() * 11))
    const dispatch = useDispatch();
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
            //Login api to check whether the user is already registered or not.
            // axios.post(endpoint + "/login", loginCredentials).then(res => {
            //     console.log("Res", res)
            //     if (res?.["data"]?.["status"] === 200) {
            //         navigate('/app/')
            //         dispatch(Loading(false))
            //     } else {
            //         dispatch(Loading(false))
            //     }
            // }).catch((err) => {
            //     dispatch(Loading(false))
            //     console.log(err)
            // })
            // dispatch(Loading(false))
            setTimeout(() => {
                dispatch(Loading(false))
                navigate("/")
            }, 4000);
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
        <Grid container height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={4} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}>
                {/* <ImageList sx={{ display: 'block' }}>
                    <ImageListItem>
                        <img src={logo} alt='logo' />
                    </ImageListItem>
                </ImageList> */}
                <Button onClick={(e) => pageChanger(e, "signin")} sx={{margin:'1rem 0rem'}} variant='outlined'><img src={googleIcon} style={{width:'15px', marginRight:'10px'}}/>Continue with Google</Button>
                <Typography mb={2}>Or</Typography>
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
                            <TextField
                                sx={{ marginBottom: "0.5rem" }}
                                {...field}
                                label="Email"
                                variant="outlined"
                                name="email"
                                fullWidth
                                error={Boolean(errors.email)}
                                helperText={errors.email ? errors.email.message : ''}
                                onChange={(e) => handleLoginCredentials(e)}
                                autoComplete="current-password"
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: 'Password is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                sx={{ marginTop: MarginStyle.margintop1 }}
                                type="password"
                                label="Password"
                                email="password"
                                variant="outlined"
                                fullWidth
                                error={Boolean(errors.password)}
                                helperText={errors.password ? errors.password.message : ''}
                                onChange={(e) => handleLoginCredentials(e)}
                                autoComplete="current-password"
                            />
                        )}
                    />
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
                    <Button style={ButtonStyle} variant="contained" onClick={(e) => pageChanger(e, "signin")} type="submit" fullWidth >Sign In</Button>
                </form>
            </Grid>
        </Grid>
    )
}
