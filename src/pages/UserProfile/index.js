import React from "react";
import { ProfileSection, Button } from "../../components/Shared";
import images from "../../assets/images/images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
    const navigate = useNavigate();
    const getLoginData = JSON.parse(localStorage.getItem('loginData'));
    const user = getLoginData.find((user) => user.isLogin);
    const getUser = () => {
        const userData = JSON.parse(localStorage.getItem('loginData'));
        if (userData) {
            return userData;
        }
        else {
            return []
        }
    }
    const [loginData, setLoginData] = useState(getUser());

    const handelLogout = () => {
        const findUser = loginData.find((user) => user.isLogin);
        if (findUser) {
            const updateLoginData = loginData.map((user) => {
                if (user.isLogin) {
                    return { ...user, isLogin: false }
                }
                else {
                    return user;
                }
            });
            localStorage.setItem('loginData', JSON.stringify(updateLoginData));
            setLoginData(updateLoginData);
            navigate('/')
        }

    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-primaryColor text-xl sm:text-2xl font-bold mb-10">User Profile</h1>
            <div className="flex flex-col w-11/12 sm:w-4/5 md:w-[40%] h-auto justify-center items-center rounded-xl bg-secondaryColor py-10 px-4">
                <img src={images.profileImg} alt="profile_img" className="rounded-full w-16 h-16 sm:w-24 sm:h-24 mb-5" />
                <h1 className="text-md sm:text-xl md:text-2xl text-primaryColor font-medium">Welcome <span className="uppercase">{user.username}</span></h1>
                <div className="mt-6">
                    <ProfileSection
                        heading="Username"
                        src={images.user}
                        alt="user"

                    >
                        <input
                            name="username"
                            value={user.username}
                            disabled={true}
                            className="text-base bg-transparent text-textSecondaryColor"
                        />
                    </ProfileSection>
                    <ProfileSection
                        heading="Email"
                        src={images.message}
                        alt="email"
                    >
                        <input
                            name="email"
                            value={user.email}
                            disabled={true}
                            className="text-base bg-transparent text-textSecondaryColor"
                        />
                    </ProfileSection>
                    <ProfileSection
                        heading="Password"
                        src={images.padlock}
                        alt="password"
                    >
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            disabled={true}
                            className="text-base bg-transparent text-textSecondaryColor"
                        />
                    </ProfileSection>
                </div>
                <Button
                    variant="outlined"
                    size="extra-large"
                    onClick={handelLogout}
                >Sign Out</Button>
            </div>
        </div>
    );

}

export default UserProfile;