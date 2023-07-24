import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import '../Style/Stylesheet.css'
import '../Style/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../Images/logo.png";
import { useNavigate } from 'react-router';
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
            navigate("/changepassword")
         }
    }
    return (
        <div className="login">
            <div className='padding-right'>
                <img className='width' src={logo} alt='logo' />
            </div>
            <FormControl id="cred-field">
                <TextField label="Email" variant="outlined" size="small" defaultValue="imdshoaibakhtar@opp.com" />
            </FormControl>
            {!codeSended ? <div className='padding'>
                <Button variant="contained" onClick={(e) => pageChanger(e, "verificationcode")} className='margin width dark'>Send Verification Code</Button>
            </div> :
                <div className="flex-column">
                    <FormControl id="cred-field" sx={{ m: 1 }} variant="outlined" size="small">
                        <InputLabel htmlFor="outlined-adornment-password">Verification Code</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            defaultValue="HD39H3"
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
                            label="Verification Code"
                        />
                    </FormControl>
                    <div className='padding'>
                        <Button variant="contained" onClick={(e) => pageChanger(e, "verified")} className='margin width dark'>Verify Code</Button>
                    </div>
                </div>
            }
        </div>
    )
}
