import React from "react";
import { Button, InputField } from "../../components/Shared";
const SignupPage = () => {
    const handelChange = () => {

    }
    return (
        <div className="flex justify-center items-center h-lvh bg-secondaryColor">
            <div className="flex flex-col w-[25%] justify-center items-center border border-lightYellowColor rounded-xl m-5 p-16 sm:py-10">
                <div>
                    <h1 className="text-textYellowColor text-xl sm:text-3xl uppercase pb-6 text-nowrap ">Signup</h1>
                </div>
                <div className="grid grid-flow-row gap-2 w-full">
                    <InputField
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={handelChange}
                    />
                    <InputField
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handelChange}
                    />
                    <InputField
                        name="password"
                        value="password"
                        type="password"
                        placeholder="Password"
                    />
                    <div className="mt-6">
                        <Button
                            variant="contained"
                            size="extra-large"
                        >Register</Button>
                    </div>
                    <Button
                        variant="outlined"
                        size="extra-large"
                    >Already have an Account</Button>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;