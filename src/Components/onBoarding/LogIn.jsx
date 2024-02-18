/* eslint-disable react/prop-types */
import { Button, Stack, TextField } from '@mui/material'
import '../../Custom-css/Stylesheet.css'
import '../../Custom-css/Responsive.css'
import { useState } from 'react';
import logo from "../../img/logo.png";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Loading } from '../../Redux/Reducer';
import { Controller, useForm } from 'react-hook-form';
import { ButtonStyle, MarginStyle } from '../Theme/Palette';

export default function LogIn(props) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [loginCredentials, setLoginCredentials] = useState({})
    const dispatch = useDispatch();
    let navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
    };
    const pageChanger = (e, page) => {
        e.preventDefault()
        if(props.floater){
            props.setShowDrawer(!props.showDrawer)
        }
        if (page === "signin") {
            dispatch(Loading(true))
            //Login api to check whether the user is already registered or not.
            // axios.post(endpoint + "/login", loginCredentials).then(res => {
            //     console.log("Res", res)
            //     if (res?.["data"]?.["status"] === 200) {
            //         navigate('/app/')
            //         dispatch(Loading(false))
            //     } else {
            //         dispatch(Loading(false))
            //     }
            // }).catch((err) => {
            //     dispatch(Loading(false))
            //     console.log(err)
            // })
            // dispatch(Loading(false))
            setTimeout(() => {
                dispatch(Loading(false))
                navigate("/")
                props.setUserName('Harry')
            }, 4000);
        }
        if (page === "signup") {
            navigate("/auth/signup")
        }
        if (page === "forgotpassword") {
            navigate("/auth/forgotpassword")
        }
    }
    const handleLoginCredentials = (e) => {
        setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            {props.floater ?
                <Stack padding={2} width='80%' display='flex' justifyContent='center' margin={'auto'}>
                    <Stack>
                        <img src={logo} alt='logo' />
                    </Stack>
                    <Stack>
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
                                        sx={{ marginBottom: "0.5rem" }}
                                        {...field}
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        fullWidth
                                        error={Boolean(errors.email)}
                                        helperText={errors.email ? errors.email.message : ''}
                                        onChange={(e) => handleLoginCredentials(e)}
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
                                        sx={{ marginTop: MarginStyle.margintop1 }}
                                        type="password"
                                        label="Password"
                                        email="password"
                                        variant="outlined"
                                        fullWidth
                                        error={Boolean(errors.password)}
                                        helperText={errors.password ? errors.password.message : ''}
                                        onChange={(e) => handleLoginCredentials(e)}
                                        autoComplete="current-password"
                                    />
                                )}
                            />
                            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Button onClick={(e) => pageChanger(e, "forgotpassword")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Forgot password</Button>
                                <Button onClick={(e) => pageChanger(e, "signup")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Create new account</Button>
                            </Stack>
                            <Button style={ButtonStyle} variant="contained" onClick={(e) => pageChanger(e, "signin")} type="submit" fullWidth >Sign In</Button>
                        </form>
                    </Stack>
                </Stack>
                :
                <Stack marginTop='8% !important' padding={2} width='30%' height={'50%'} display='flex' justifyContent='center' margin={'auto'} boxShadow={'2px 2px 6px 3px #d7d7d6'} borderRadius={'8px'}>
                    <Stack>
                        <img src={logo} alt='logo' />
                    </Stack>
                    <Stack>
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
                                        sx={{ marginBottom: "0.5rem" }}
                                        {...field}
                                        label="Email"
                                        variant="outlined"
                                        name="email"
                                        fullWidth
                                        error={Boolean(errors.email)}
                                        helperText={errors.email ? errors.email.message : ''}
                                        onChange={(e) => handleLoginCredentials(e)}
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
                                        sx={{ marginTop: MarginStyle.margintop1 }}
                                        type="password"
                                        label="Password"
                                        email="password"
                                        variant="outlined"
                                        fullWidth
                                        error={Boolean(errors.password)}
                                        helperText={errors.password ? errors.password.message : ''}
                                        onChange={(e) => handleLoginCredentials(e)}
                                        autoComplete="current-password"
                                    />
                                )}
                            />
                            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                <Button onClick={(e) => pageChanger(e, "forgotpassword")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Forgot password</Button>
                                <Button onClick={(e) => pageChanger(e, "signup")} sx={{ maxWidth: '10rem', fontSize: '10px', padding: '8px 3px', color: 'black' }}>Create new account</Button>
                            </Stack>
                            <Button style={ButtonStyle} variant="contained" onClick={(e) => pageChanger(e, "signin")} type="submit" fullWidth >Sign In</Button>
                        </form>
                    </Stack>
                </Stack>}
        </>
    )
}
