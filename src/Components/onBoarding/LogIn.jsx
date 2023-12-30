import { Button, TextField } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import axios from 'axios';
import { endpoint } from '../constant/constant_values';
import { Controller, useForm } from 'react-hook-form';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';

export default function LogIn() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loginCredentials, setLoginCredentials] = useState({})
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
    };
    const pageChanger = (e, page) => {
        e.preventDefault()
        if (page === "signin") {
            dispatch(Loading(true))
            //Login api to check whether the user is already registered or not.
            axios.post(endpoint + "/login", loginCredentials).then(res => {
                console.log("Res", res)
                if (res?.["data"]?.["status"] === 200) {
                    navigate('/app/')
                    dispatch(Loading(false))
                } else {
                    dispatch(Loading(false))
                }
            }).catch((err) => {
                dispatch(Loading(false))
                console.log(err) 
            })
            // dispatch(Loading(false))
            // navigate('/app/')
            // dispatch(Loading(false)) 
        }
        if (page === "signup") {
            navigate("/signup")
        }
        if (page === "forgotpassword") {
            navigate("/forgotpassword")
        }
    }
    const handleLoginCredentials = (e) => {
        setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="login">
            <div className='padding-right'>
                <img className='width' src={logo} alt='logo' />
            </div>
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
                            sx={{marginBottom:"0.5rem"}}
                            {...field}
                            label="Email"
                            variant="outlined"
                            name = "email"
                            fullWidth
                            error={Boolean(errors.email)}
                            helperText={errors.email ? errors.email.message : ''}
                            onChange = {(e) => handleLoginCredentials(e)}
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
                            sx = {{marginTop:MarginStyle.margintop1}}
                            type="password"
                            label="Password"
                            email="password"
                            variant="outlined"
                            fullWidth
                            error={Boolean(errors.password)}
                            helperText={errors.password ? errors.password.message : ''}
                            onChange = {(e) => handleLoginCredentials(e)}
                            autoComplete="current-password"
                        />
                    )}
                />
                <div className='space-between' style={{marginTop:MarginStyle.margintop1}}>
                    <button onClick={(e) => pageChanger(e, "forgotpassword")} style={{Padding:"0rem !important"}}>Forgot password</button>
                    <button onClick={(e) => pageChanger(e, "signup")} style={{Padding:"0rem"}}>Create new account</button>
                </div>
                    <Button style={ButtonStyle} variant="contained" onClick={(e) => pageChanger(e, "signin")} type="submit" fullWidth >Sign In</Button>
            </form>
        </div>
    )
}
