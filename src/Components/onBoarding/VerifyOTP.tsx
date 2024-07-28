import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import React from 'react';
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import axios from 'axios';
import { endpoint } from '../constant/constant_values';
import { toast } from 'react-toastify';

export default function VerifyOTP() {
    const { userDetails } = useSelector<any>(state => state.myAppState)
    const [showPassword, setShowPassword] = useState(false);
    const [codeSended, setCodeSended] = useState(false)
    const [otpToVerify, setOtpToVerify] = useState()
    const dispatch = useDispatch()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const newUserDetails = JSON.parse(localStorage.getItem("newUserDetails"))

    let navigate = useNavigate()
    const verifyCode = (e) => {
        e.preventDefault()
        dispatch(Loading(true))
        let requestBody = {
            "otp": parseInt(otpToVerify),
            "phone_number": newUserDetails?.['phone_number']
        }
        axios.post(endpoint + "/verify-otp", requestBody).then(res => {
            console.log(res);
            dispatch(Loading(false))
            if (res.data.status_code === 200) {
                toast.success("User verified", { position: 'top-center' });
                navigate("/auth/changepassword")
            }
            else if (res.data.status_code === 400) {
                toast.error("Invalid OTP", { position: 'top-center' });
            }
        }).catch(err => {
            dispatch(Loading(false))
            toast.error("Something went wrong", { position: 'top-center' });
        })
    }
    return (
        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px', marginTop: '0px' } }} columns={{ xs: 3.3, sm: 12, md: 20 }} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={3} sm={6} md={6} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}
                sx={{
                    '&.MuiGrid-item': { padding: '24px' }, '.MuiTypography-root': {
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#4f4f4f',
                        textAlign: 'left',
                        marginBottom: '6px'
                    }
                }}>
                <Stack>
                    <Stack direction={'column'} width={'100%'} mb={2}>
                        <Typography textAlign={'start'}>Verification code</Typography>
                        <FormControl variant="outlined" sx={{ marginBottom: '1rem' }}>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                size='small'
                                sx={{
                                    '& .MuiInputBase-input::placeholder': {
                                        fontSize: '13px',
                                    }
                                }}
                                onChange={(e) => setOtpToVerify(e.target.value)}
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
                                placeholder="Verification code"
                            />
                        </FormControl>
                        <Button variant="contained" onClick={(e) => verifyCode(e)} style={ButtonStyle}>Verify Code</Button>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}
