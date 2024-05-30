import React from "react";
import { Button, InputField } from "../../Shared";

const ContactInfo = () => {
    return (
        <div className="bg-secondaryColor h-96 rounded-2xl p-4 text-textSecondaryColor">
            <div className="py-6">
                bread crumb
            </div>
            <div className="flex justify-between">
                <div className=" w-[40%] flex flex-col gap-4">
                    <div className="flex justify-between ">
                        <h1 className="text-2xl uppercase">contact information</h1>
                        <div className="flex items-center gap-1 text-sm">
                            <p className="text-textLightGrayColor">already have an account?</p>
                            <button>Sign in</button>
                        </div>
                    </div>
                    <div className="">
                        <form className="flex flex-col gap-4">
                            <InputField placeholder="Name Surname" />
                            <InputField placeholder="Mobile" />
                            <Button variant="contained" size="extra-large">continue to shipping method</Button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-end w-[60%]">
                    orderSummary
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;