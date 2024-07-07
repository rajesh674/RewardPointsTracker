import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styleObj = {
    display: 'flex',
    alignItems:'center',
    justifyContent:'Center',
    height:'100vh'
}

const Loader = () => {
    return (
        <Box sx={styleObj}>
            <CircularProgress />
        </Box>
    );
};

export default Loader;