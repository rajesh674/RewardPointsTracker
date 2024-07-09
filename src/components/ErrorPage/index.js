import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const styleObj = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center',
}

const ErrorPage = () => {
    return (
        <Stack sx={styleObj} spacing={2}>
            <Alert sx={{ width: '1200px' }} severity="error">
                <AlertTitle>Error</AlertTitle>
                <>
                    <h1>404 - Page Not Found</h1>
                    <p>Sorry, the page you are looking for could not be found.</p>
                </>
            </Alert>
        </Stack>
    );
};

export default ErrorPage;