import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import React from 'react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { endpoint } from '../constant/constant_values';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';

export default function ForgotPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [mobileNumber, setMobileNumber] = useState()
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const dispatch = useDispatch()
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let navigate = useNavigate()
    const sendVerificationCode = (e) => {
        e.preventDefault()
        dispatch(Loading(true))
        localStorage.setItem("newUserDetails", JSON.stringify({ "phone_number": mobileNumber }))
        axios.post(endpoint + "/forgot-password", { "phone_number": mobileNumber }).then((result) => {
            if (result?.['data']?.['status_code'] === 200) {
                toast.success("Successfully OTP sent.", { position: 'top-center' });
                navigate("/auth/verifyOtp")
                dispatch(Loading(false))
            }
        }).catch((err) => {
            toast.error("Something went wrong", { position: 'top-center' });
            dispatch(Loading(false))
        });
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
                    <FormControl>
                        <Stack direction={'column'} width={'100%'} mb={2}>
                            <Typography textAlign={'start'}>Mobile number</Typography>
                            <TextField
                                size='small'
                                placeholder='Mobile number'
                                fullWidth
                                name="phone_number"
                                onChange={(e) => setMobileNumber(e.target.value)}
                                sx={{
                                    '& .MuiInputBase-input::placeholder': {
                                        fontSize: '13px',
                                    }
                                }}
                            />
                        </Stack>
                    </FormControl>
                    <Button variant="contained" onClick={(e) => sendVerificationCode(e)} style={ButtonStyle}>Send Verification Code</Button>
                </Stack>
            </Grid>
        </Grid>
    )
}
