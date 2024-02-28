import React from 'react';
import { Button, Grid, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import { FormControl } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Filter from './Filter';

const AdvFilter = ({search, setSearch}) => {
    // const [search, setSearch] = useState('')
    const [showDrawer, setShowDrawer] = useState(false);
    const StyledDrawer = styled(Drawer)(() => ({
        '& .MuiDrawer-paper': {
            padding: '20px 20px',
            width: '40%',
            // margin: '25% 1rem',
            borderRadius: '10px',
            // height: '45vh',
            color: 'gray'
        },
        // '& .MuiDrawer-paper::-webkit-scrollbar': {
        //     display: 'none'
        // }
    }));
    const toggleDrawer = () => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log('object');
        setShowDrawer(!showDrawer);
    };
    return (
        <Grid container mt={0} display={'flex'} justifyContent={'end'} alignItems={'center'}>
            <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined">
                <OutlinedInput placeholder='Search' size='small' onChange={(e) => setSearch(e.target.value)} value={search}
                    endAdornment={
                        <InputAdornment position="end">
                            {
                                search.length > 0 ?
                                    <IconButton aria-label="toggle password visibility" edge="end" onClick={() => setSearch('')} >
                                        <ClearIcon />
                                    </IconButton> :
                                    <IconButton aria-label="toggle password visibility" edge="end">
                                        <SearchIcon />
                                    </IconButton>
                            }
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button variant='outlined' size='small' sx={{ height: '38px', borderColor: '#bbbbbb', color: '#757575' }} onClick={() => setShowDrawer(!showDrawer)}><FilterAltOutlinedIcon sx={{ width: '18px', marginRight: '6px' }} />Filter</Button>
            <Drawer anchor='top' open={showDrawer} onClose={toggleDrawer()} sx={{
                '& .MuiDrawer-paper': {
                    width: '36%',
                    borderRadius: '.4rem',
                    margin: '19vh auto',
                    padding: '16px'
                }
            }}>
                <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer()}>
                    <CloseIcon sx={{ cursor: 'pointer' }} />
                </IconButton>
                <Filter setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
            </Drawer>
            {/* <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer()}>
                    <CloseIcon sx={{ cursor: 'pointer' }} />
                </IconButton>
                <Stack direction={'row'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" style={{ 'width': '15%' }} alt="" />
                    <Typography sx={{ margin: '1rem 1rem', padding: '0rem 3rem' }}>This website uses cookies to ensure you get the best experience on our website. <Link sx={{ cursor: 'pointer' }}>Learn more.</Link></Typography>
                </Stack>
                <Stack spacing={2} margin={'4rem 3rem'}>
                    <Button variant="contained" onClick={() => setShowDrawer(!showDrawer)}>Accept all cookies</Button>
                    <Button variant="outlined" onClick={() => setShowDrawer(!showDrawer)}>Customize setting</Button>
                </Stack> */}
        </Grid>
    )
}

export default AdvFilter;