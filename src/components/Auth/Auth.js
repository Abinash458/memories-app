import React, { useState } from 'react';
import { Container, Avatar, Paper, Grid, Button, Typography } from "@material-ui/core";
import { LockOutlined } from '@material-ui/icons';
import { GoogleLogin } from "react-google-login";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import * as authActions from "../../redux/actions/authActions";

const Auth = () => {

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setInSignUp] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setInSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        dispatch(authActions.googleSignIn(result, token));
        history.push('/');

        // try {
        //     dispatch({ type: "AUTH", data: { result, token } });
        //     history.push('/');
        // } catch (error) {
        //     console.log(error);
        // }
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try Again later");
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignUp && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
                    <GoogleLogin 
                        clientId="592168686898-niq15l1us03ogkpf12c69h7j3bbbiij4.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
