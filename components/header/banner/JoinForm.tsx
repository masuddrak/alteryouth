"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const JoinForm = () => {
    const [phoneValue, setPhoneValue] = useState<string | undefined>(""); // State for PhoneInput value
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Phone Value:", phoneValue); // Logs the phone input value
        // Add further logic to handle form submission
    };

    return (
        <div className="bg-white  mx-4 md:mx-0 p-3 shadow-lg w-full xl:w-4/6 rounded-md ">
            <h3 className="text-xl py-3">
                Join the <span className="text-baseBg">#alteryouthrevolution</span>
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="py-2 px-4 outline-none border-[1px] border-gray-400 rounded-md shadow-lg"
                />
                <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="py-2 px-4 outline-none border-[1px] border-gray-400 rounded-md shadow-lg"
                />
                <PhoneInput
                    className="py-2 px-4 outline-none border-[1px] border-gray-400 rounded-md shadow-lg"
                    placeholder="Enter phone number"
                    value={phoneValue}
                    defaultCountry="BD"
                    onChange={setPhoneValue}
                />
                <p>Number of Scholarships</p>
                <div className="flex justify-between items-end">
                    <div className="flex items-center">
                        <Button className="text-xl">-</Button>
                        <p className="px-4">1</p>
                        <Button className="bg-baseBg text-xl">+</Button>
                    </div>
                    <p className="text-sm"><span className="text-xl font-bold">USD 15.30</span>/month
                    </p>
                </div>
                <Button className="uppercase py-5 bg-baseBg font-bold text-xl">Start Now</Button>
            </form>
        </div>
    );
};

export default JoinForm;
