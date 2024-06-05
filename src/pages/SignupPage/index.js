import React, { useState } from "react";
import { Button, InputField } from "../../components/Shared";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
    const navigate = useNavigate();

    const getUser = () => {
        const userData = localStorage.getItem('loginData');
        if (userData) {
            return JSON.parse(userData);
        }
        else {
            return []
        }
    }
    const [user, setUser] = useState(getUser());
    const [signupUser, setSignupUser] = useState({
        id: 0,
        username: '',
        email: '',
        password: '',
        isLogin: false
    });

    //set errors when i=validations are not true
    const [errorMessage, setErrorMessage] = useState({
        usernameError: '',
        passwordError: '',
        emailError: '',
    });

    const [userExist, setUserExist] = useState();

    const handelChange = (event) => {
        const { name, value } = event.target;

        setSignupUser(
            {
                ...signupUser,
                [name]: value
            });

        // set the error message empty if user enter atleast one character in the input field
        if (name === 'username') { setErrorMessage((prev) => ({ ...prev, usernameError: '' })); }
        if (name === 'email') { setErrorMessage((prev) => ({ ...prev, emailError: '' })); }
        if (name === 'password') { setErrorMessage((prev) => ({ ...prev, passwordError: '' })); }

    }

    //handel the submitted data

    const submitUserData = () => {

        //check if any field is empty then set the error for the field 

        if (signupUser.username === '') {
            setErrorMessage((prev) => ({ ...prev, usernameError: "username is required" }))
        }
        if (signupUser.email === '') {
            setErrorMessage((prev) => ({ ...prev, emailError: "email is required" }))
        }
        if (signupUser.password === '') {
            setErrorMessage((prev) => ({ ...prev, passwordError: "password is required" }))
        }

        if (signupUser.username !== '' && signupUser.email !== '' && signupUser.password !== '') {
            const data = [...user, { ...signupUser, id: Math.floor(Math.random() * 100), isLogin: true }];
            const alreadyExist = user.find((item) => item.email == signupUser.email);

            if (alreadyExist) {
                setUserExist(true);
            }
            else {
                setUserExist(false)
                setUser(data);
                const userData = JSON.stringify(data);
                localStorage.setItem('loginData', userData);
                navigate('/login')
                setSignupUser({
                    username: '',
                    email: '',
                    password: ''
                })
            }

        }
    }
    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div className="flex flex-col justify-center items-center h-lvh bg-primaryColor">
            {
                userExist && <p className="flex text-center bg-errorBgColor text-errorColor rounded-md px-4 py-1">user already exists please choose another email</p>
            }
            <div className="flex flex-col w-[30rem] justify-center items-center rounded-xl m-5 p-4 small-tab:p-10 py-10 bg-secondaryColor">
                <div>
                    <h1 className="text-textYellowColor text-xl  small-tab:text-2xlxl sm:text-3xl font-medium uppercase pb-6 text-nowrap ">Signup</h1>
                </div>
                <div className="grid grid-flow-row gap-2 w-full">

                    <div>
                        <InputField
                            name="username"
                            value={signupUser.username}
                            type="text"
                            placeholder="Username"
                            onChange={handelChange}
                            error={errorMessage.usernameError}
                        />
                    </div>
                    <InputField
                        name="email"
                        value={signupUser.email}
                        type="email"
                        required
                        placeholder="Email"
                        onChange={handelChange}
                        error={errorMessage.emailError}
                    />
                    <InputField
                        name="password"
                        value={signupUser.password}
                        type="password"
                        placeholder="Password"
                        onChange={handelChange}
                        error={errorMessage.passwordError}
                    />
                    <div className="mt-6">
                        <Button
                            variant="contained"
                            size="extra-large"
                            onClick={submitUserData}
                        >Register</Button>
                    </div>
                    <Button
                        variant="outlined"
                        size="extra-large"
                        onClick={navigateToLogin}
                    >Already have an Account</Button>
                </div>
            </div>
        </div>
    )
}


export default SignupPage;