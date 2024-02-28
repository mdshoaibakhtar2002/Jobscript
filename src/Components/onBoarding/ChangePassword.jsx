import {Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    let navigate = useNavigate()
    const pageChanger = (e, page) =>{
        e.preventDefault()
        if(page === "signin"){
            navigate('/')
        }
    }
    return (
        <Grid container height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}>
            <Box>
                <img className='width' src = {logo} alt='logo'/>
            </Box>
            <FormControl sx={{marginTop:MarginStyle.margintop2}} variant="outlined">
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
            <FormControl sx={{marginTop:MarginStyle.margintop2}} variant="outlined">
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
            <FormControl sx={{marginTop:MarginStyle.margintop2}} variant="outlined">
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
