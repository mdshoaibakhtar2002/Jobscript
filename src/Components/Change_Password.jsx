import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import '../Style/Stylesheet.css'
import '../Style/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../Images/logo.png";
import { useNavigate } from 'react-router';
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
        <div className="login">
            <div className='padding-right'>
                <img className='width' src = {logo} alt='logo'/>
            </div>
            <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
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
            <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
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
            <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
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
            <div className='padding'>
            <Button variant="contained" onClick={(e) => pageChanger(e, "signin")} className='margin width dark'>Reset Password</Button>
            </div>
        </div>
    )
}
