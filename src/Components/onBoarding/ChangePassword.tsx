import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
import React from 'react';
export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    let navigate = useNavigate()
    const pageChanger = (e, page) => {
        e.preventDefault()
        if (page === "signin") {
            navigate('/auth/')
        }
    }
    return (
        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px', marginTop: '0px' } }} columns={{ xs: 3.3, sm: 12, md: 20 }} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={3} sm={6} md={6} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}
                sx={{ '&.MuiGrid-item': { padding: '24px' } }}>
                <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
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
                        label="Old Password"
                    />
                </FormControl>
                <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
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
                        label="New Password"
                    />
                </FormControl>
                <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined">
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
                <Button variant="contained" onClick={(e) => pageChanger(e, "signin")} style={ButtonStyle}>Reset Password</Button>
            </Grid>
        </Grid>
    )
}
