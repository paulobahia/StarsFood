"use client"

import { useState } from "react";
import Step1 from "./components/Step1";

const RegisterForm = () => {
    const [step, setStep] = useState<number>(1);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <div className="w-full flex-col flex justify-center items-center max-w-sm">
            <span className="text-center">
                <p className="font-semibold text-2xl">Crie a sua conta aqui</p>
            </span>
            {step == 1 && <Step1 onNextStep={handleNextStep} />}
        </div>
    )
}


export default RegisterForm