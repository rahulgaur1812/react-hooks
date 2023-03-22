import React, { useContext } from 'react';
import MyContext from './MyContext';

function Form() {
    const { formData, updateFormData } = useContext(MyContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        updateFormData(name, value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formData && formData.firstName || ''}
                onChange={handleInputChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={formData && formData.lastName || ''}
                onChange={handleInputChange}
                placeholder="Last Name"
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;
