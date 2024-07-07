import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const styleObj = {
     width: '100%',
     height:'100vh',
     display: 'flex',
     alignItems:'center',
     justifyContent:'Center',
}

const ErrorPage = () => {
    return (
        <Stack sx={styleObj} spacing={2}>
            <Alert sx={{width:'1200px'}} severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error Alert with a scary title.
            </Alert>
        </Stack>
    );
};

export default ErrorPage;