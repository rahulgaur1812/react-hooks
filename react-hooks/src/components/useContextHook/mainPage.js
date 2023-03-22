import React from 'react';
import { FormProvider } from './FormContext';
import PersonalInfo from './PersonalInfo';
import DetailedInfo from './DetailedInfo';

function MainPage() {
    return (
        <FormProvider>
            <PersonalInfo />
            <DetailedInfo />
        </FormProvider>
    );
}

export default MainPage;