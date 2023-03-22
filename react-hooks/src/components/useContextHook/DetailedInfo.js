import React, { useContext } from 'react';
import { FormContext } from './FormContext';

function DetailedInfo() {
    const { step } = useContext(FormContext);

    return (
        <div>
            {step === 2 && <p>Step 2: Enter detailed info</p>}
            {step == 3 && <p>Step 3: Enter detailed info</p>}

        </div>
    );
}

export default DetailedInfo;
