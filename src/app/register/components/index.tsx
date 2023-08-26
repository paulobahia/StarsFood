"use client"

import { useState } from "react";
import Step2 from "./Step2";
import Step1 from "./Step1";

const RegisterForm = () => {
    const [step, setStep] = useState<number>(2);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="w-full flex-col flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Crie a sua conta aqui</p>
            </span>
            {step == 1 && <Step1 onNextStep={handleNextStep} />}
            {step == 2 && <Step2 />}
        </div>
    )
}


export default RegisterForm