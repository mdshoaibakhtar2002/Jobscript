import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import React from 'react';
import { Typography } from '@mui/material';
export default function ForgotPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [codeSended, setCodeSended] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let navigate = useNavigate()
    const pageChanger = (e, page) => {
        e.preventDefault()
        if (page === "verificationcode") {
            setCodeSended(true);
        }
        if (page === "verified") {
            navigate("/auth/changepassword")
        }
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
                            <Typography textAlign={'start'}>Email</Typography>
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
                            />
                        </Stack>
                    </FormControl>
                    {!codeSended ?
                        <Button variant="contained" onClick={(e) => pageChanger(e, "verificationcode")} style={ButtonStyle}>Send Verification Code</Button> :
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
                            <Button variant="contained" onClick={(e) => pageChanger(e, "verified")} style={ButtonStyle}>Verify Code</Button>
                        </Stack>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}
