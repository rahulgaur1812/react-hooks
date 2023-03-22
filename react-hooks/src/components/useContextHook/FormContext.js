import React, { createContext, useState } from 'react';
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <FormContext.Provider value={{ step, nextStep, prevStep }}>
            {children}
        </FormContext.Provider>
    );
};