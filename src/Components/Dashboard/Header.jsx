import { ImageListItem, Stack, Typography } from "@mui/material";
import imageHeader from '../../img/login-img-6.png'
import avatar from '../../img/home_page_avatar.png'

export default function Header() {
    return (
        <Stack
            direction='row'
            width='100%'
            height='87vh'
            borderRadius='8px'
            marginBottom={2}
            padding={2}
            backgroundColor='#f4f4f4'
            className="pattern"
        >
            <Stack width={'100%'} margin={'auto'}>
                <Stack direction={'row'} width={'100%'} margin={'auto'} justifyContent={'center'}>
                    <Typography sx={{ fontSize: '36px', fontFamily: 'cursive', color: '#282828' }}>Your Career,</Typography>
                    <Typography sx={{ fontSize: '30px', fontFamily: 'fantasy', color: '#5a5a5a', marginTop: '20px', marginLeft: '8px' }}>Your Script,</Typography>
                </Stack>
                <Stack direction={'row'} width={'100%'} margin={'auto'} justifyContent={'center'}>
                <Typography sx={{ fontSize: '32px', fontFamily: 'math', color: '#23235b', marginTop: '-10px' }}>Our Expertise</Typography>
                <ImageListItem sx={{ display: 'flex', justifyContent: 'center', height:'35px !important', marginLeft:'12px' }}>
                        <img style={{ width: '100%' }} src={avatar} alt="Loading...." />
                    </ImageListItem>
                    </Stack>
            </Stack>
            <Stack width={'100%'}>
                <ImageListItem sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '70%', marginTop: '2rem' }} src={imageHeader} alt="Loading...." />
                </ImageListItem>
            </Stack>
        </Stack>
    )
}
