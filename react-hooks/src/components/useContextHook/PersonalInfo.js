import React, { useContext } from 'react';
import { FormContext } from './FormContext';

function PersonalInfo() {
    const { step, nextStep, prevStep } = useContext(FormContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        nextStep();
    };

    const prevstepfun = () => {
        prevStep();
    }
    const nextstepfun = () => {
        nextStep();
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* form fields for personal info */}
            <button type="button" onClick={nextstepfun} >Next</button>
            <button type="button" onClick={prevstepfun}>Prev</button>
        </form>
    );
}

export default PersonalInfo;
