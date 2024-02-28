import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Grid } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';
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
        <Grid container height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={4} display={'flex'} flexDirection={'column'} boxShadow={'2px 2px 6px 3px #d7d7d6'} padding={4} borderRadius={'16px 0px 16px 0px'}>
            <Stack>
                <img src={logo} alt='logo' />
            </Stack>
            <Stack>
                <FormControl>
                    <TextField label="Email" variant="outlined" defaultValue="imdshoaibakhtar@jscript.com" />
                </FormControl>
                {!codeSended ?
                    <Button variant="contained" onClick={(e) => pageChanger(e, "verificationcode")} style={ButtonStyle}>Send Verification Code</Button> :
                    <Stack>
                        <FormControl sx={{ marginTop: MarginStyle.margintop2 }} variant="outlined">
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
                        <Button variant="contained" onClick={(e) => pageChanger(e, "verified")} style={ButtonStyle}>Verify Code</Button>
                    </Stack>
                }
            </Stack>
        </Grid>
        </Grid>
    )
}
