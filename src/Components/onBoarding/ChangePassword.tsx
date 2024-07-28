import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Grid, FormHelperText } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import axios from 'axios';
import { endpoint } from '../constant/constant_values';
import { toast } from 'react-toastify';
export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({})
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [warning, setWarning] = useState(false)
    const newUserDetails = JSON.parse(localStorage.getItem("newUserDetails"))
    let navigate = useNavigate()
    const resetPassword = (e) => {
        e.preventDefault()
        if (formData?.['password'] !== formData?.['confirm_password']) {
            setWarning(true)
            return
        }
        const requestBody = {
            "phone_number": newUserDetails?.['phone_number'],
            "password": formData?.['password'],
            "confirm_password": formData?.['confirm_password'],
        }
        axios.post(endpoint + "/reset-password", requestBody).then((result) => {
            console.log(result);
            if (result.data.status_code === 200) {
                toast.success("Password change successfully", { position: 'top-center' });
                navigate("/auth/")
            }
        }).catch((err) => {
            console.log(err);
            toast.error("Something went wrong", { position: 'top-center' });
        });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setWarning(false)
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
                <Stack direction={'column'} width={'100%'} mb={2}>
                    <Typography>New password</Typography>
                    <FormControl variant="outlined" >
                        <OutlinedInput
                            error={warning}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            size='small'
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                }
                            }}
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
                            placeholder="New password"
                        />
                    </FormControl>
                </Stack>
                <Stack direction={'column'} width={'100%'} mb={2}>
                    <Typography>Confirm password</Typography>
                    <FormControl variant="outlined" >
                        <OutlinedInput
                            error={warning}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            name="confirm_password"
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    fontSize: '13px',
                                }
                            }}
                            onChange={(e) => handleChange(e)}
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
                            placeholder="Cofirm password"
                        />
                    </FormControl>
                </Stack>
                {warning && <FormHelperText error>Password and confirm password must be same</FormHelperText>}
                <Button variant="contained" onClick={(e) => resetPassword(e)} style={ButtonStyle}>Reset Password</Button>
            </Grid>
        </Grid>
    )
}
