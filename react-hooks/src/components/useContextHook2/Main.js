import React from 'react';
import MyProvider from './MyProvider';
import Form from './Form';

function Main() {
    return (
        <MyProvider>
            <Form />
        </MyProvider>
    );
}

export default Main;