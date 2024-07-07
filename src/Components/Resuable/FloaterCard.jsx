/* eslint-disable react/prop-types */
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { data } from '../constant/constant_values';
import CloseIcon from '@mui/icons-material/Close';
import { Login } from '@mui/icons-material';
import LogIn from '../onBoarding/LogIn';

const StyledDrawer = styled(SwipeableDrawer)(() => ({
    '& .MuiDrawer-paper': {
        width: '30%',
        padding: '20px 20px',
        margin: '3rem 30rem',
        borderRadius: '10px',
        height: '88vh',
        color: 'gray',
        transform: 'none',
        transition: 'transform 5s cubic-bezier(0, 0, 0.2, 1) 6s'
    },
    '& .MuiDrawer-paper::-webkit-scrollbar': {
        display: 'none'
    }
}));
export default function FloaterCard({ showDrawer, toggleDrawer, contentToShow, setShowDrawer }) {
    return (
        <StyledDrawer
            anchor='top'
            open={showDrawer}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
        >
            <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer(null)}>
                <CloseIcon sx={{ cursor: 'pointer' }} />
            </IconButton>
            <LogIn floater={true} toggleDrawer={toggleDrawer} showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
        </StyledDrawer>
    );
}