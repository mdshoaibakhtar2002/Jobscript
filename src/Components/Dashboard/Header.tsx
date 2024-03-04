import { Grid, ImageListItem, Stack, Typography } from "@mui/material";
import imageHeader from '../../img/login-img-6.png'
import avatar from '../../img/home_page_avatar.png'
import React from "react";
import { isMobile } from "react-device-detect";

export default function Header() {
    return (
        <Grid className="pattern" item xs={12} sm={12} md={20} sx={{ '&.MuiGrid-item': { padding: '24px' } }} display={'flex'} flexDirection={isMobile ? 'column' : 'row'}>
            <Stack width={'100%'} margin={'auto'}>
                <Stack direction={'row'} width={'100%'} margin={'auto'} justifyContent={'center'}>
                    <Typography sx={{ fontSize: isMobile?'20px' :'36px', fontFamily: 'cursive', color: '#282828' }}>Your Career,</Typography>
                    <Typography sx={{ fontSize: isMobile ? '20px':'30px', fontFamily: 'fantasy', color: '#5a5a5a', marginTop: isMobile ? '10px':'20px', marginLeft: '8px' }}>Your Script,</Typography>
                </Stack>
                <Stack direction={'row'} width={'100%'} margin={'auto'} justifyContent={'center'}>
                    <Typography sx={{ fontSize: isMobile ? '20px':'32px', fontFamily: 'math', color: '#23235b', marginTop: '-10px' }}>Our Expertise</Typography>
                    <ImageListItem sx={{ display: 'flex', justifyContent: 'center', height: '35px !important', marginLeft: '12px' }}>
                        <img style={{ width: '100%' }} src={avatar} alt="Loading...." />
                    </ImageListItem>
                </Stack>
            </Stack>
            <Stack width={'100%'}>
                <ImageListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '70%', marginTop: '2rem' }} src={imageHeader} alt="Loading...." />
                </ImageListItem>
            </Stack>
        </Grid >
    )
}
