
import React from 'react';

const ErrorBox = ({ errors }) => {
    return (
        <div className="error-box">
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
};

export default ErrorBox;