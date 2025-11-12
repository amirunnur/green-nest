import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error =useRouteError()
    return (
        <div>
            <h1>404 page not found {error.message}</h1>
        </div>
    );
};

export default ErrorPage;