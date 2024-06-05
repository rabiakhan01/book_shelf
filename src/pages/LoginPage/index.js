import React, { useState } from "react";
import { Button, InputField } from "../../components/Shared";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
    });

    //set errors when i=validations are not true
    const [errorMessage, setErrorMessage] = useState({
        passwordError: '',
        emailError: '',
    });

    // set the error if user not logged in
    const [invalidUser, setInvalidUser] = useState(false);

    const handelChange = (event) => {
        const { name, value } = event.target;

        setLoginUser(
            {
                ...loginUser,
                [name]: value
            });

        // set the error message empty if user enter atleast one character in the input field
        if (name === 'email') { setErrorMessage((prev) => ({ ...prev, emailError: '' })); }
        if (name === 'password') { setErrorMessage((prev) => ({ ...prev, passwordError: '' })); }
    }

    //handel the submitted data

    const handelLogin = () => {

        //check if any field is empty then set the error for the field 

        if (loginUser.email === '') {
            setErrorMessage((prev) => ({ ...prev, emailError: "Email is required" }))
        }
        if (loginUser.password === '') {
            setErrorMessage((prev) => ({ ...prev, passwordError: "Password is required" }))
        }

        if (loginUser.email !== '' && loginUser.password !== '') {
            const findUser = user.find((item) => item.email === loginUser.email);
            if (findUser) {
                navigate('/contact', {
                    state: {
                        id: 1,
                        isActive: true
                    }
                });
                setInvalidUser(false)
            }
            else {
                setInvalidUser(true);
            }

        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-lvh bg-primaryColor">
            {
                invalidUser && <p className="flex text-center bg-errorBgColor text-errorColor rounded-md px-4 py-1">Invalid username or password</p>
            }
            <div className="flex flex-col w-[27rem] justify-center items-center bg-secondaryColor rounded-xl m-4 p-4 small-tab:px-10 py-14">
                <div>
                    <h1 className="text-textYellowColor text-xl  small-tab:text-2xlxl sm:text-3xl font-medium uppercase pb-6 text-nowrap ">Login</h1>
                </div>
                <div className="grid grid-flow-row gap-2 w-full">
                    <InputField
                        name="email"
                        type="email"
                        value={loginUser.email}
                        placeholder="Email"
                        onChange={handelChange}
                        error={errorMessage.emailError}
                    />
                    <InputField
                        name="password"
                        value={loginUser.password}
                        type="password"
                        placeholder="Password"
                        onChange={handelChange}
                        error={errorMessage.passwordError}
                    />
                    <div className="mt-6">
                        <Button
                            variant="contained"
                            size="extra-large"
                            onClick={handelLogin}
                        >Sign In</Button>
                    </div>
                    <Button
                        variant="outlined"
                        size="extra-large"
                    >Create new account</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;