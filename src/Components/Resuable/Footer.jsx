import { Grid, Typography, Link, Stack } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { isMobile } from "react-device-detect";

export default function Footer() {
    return (
        <Grid container spacing={2} justifyContent="space-between" marginTop={2} padding={isMobile?'0rem':'1rem 5vw'}>
            <Grid item xs={6} sm={6} md={3} display={'flex'} justifyContent={'center'}>
                <Stack spacing={isMobile ? 1 : 3} textAlign={'left'} width={isMobile?'18vw':'10vw !important'}>
                    <Link sx={{ cursor: 'pointer' }}>About us</Link>
                    <Link sx={{ cursor: 'pointer' }}>Careers</Link>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={3} display={'flex'} justifyContent={'center'}>
                <Stack spacing={isMobile ? 1 : 3} textAlign={'left'} width={isMobile?'36vw':'10vw !important'}>
                    <Link sx={{ cursor: 'pointer' }}>Report issue</Link>
                    <Link sx={{ cursor: 'pointer' }}>Help Centre</Link>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={3} display={'flex'} justifyContent={'center'}>
                <Stack spacing={isMobile ? 1 : 3} textAlign={'left'} width={isMobile?'18vw':'10vw !important'}>
                    <Link sx={{ cursor: 'pointer' }}>Queries</Link>
                    <Link sx={{ cursor: 'pointer' }}>Support</Link>
                </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={3} display={'flex'} justifyContent={'center'}>
                <Stack spacing={isMobile ? 1 : 3} textAlign={'left'} width={isMobile?'36vw':'15vw !important'}>
                    <Link sx={{ cursor: 'pointer' }}>Privacy policy</Link>
                    <Link sx={{ cursor: 'pointer' }}>Terms & Condition</Link>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack spacing={3} alignItems={'center'} display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                    <Typography marginTop={'26px !important'} marginRight={'16px !important'}>Connect with us</Typography>
                    <Stack direction="row" spacing={3} sx={{ cursor: 'pointer' }}>
                        <InstagramIcon />
                        <XIcon />
                        <LinkedInIcon />
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} sx={{margin:isMobile ?'1rem 10vw' :'1rem 20vw'}}>
                <Typography>
                    ©{new Date().getFullYear()} Jobscript. All rights reserved.
                    Any unauthorized reproduction or distribution of content from this website is strictly prohibited.
                    For inquiries, please contact <Link href="mailto:help@jobscript.com">help@jobscript.com</Link>
                </Typography>
            </Grid>
        </Grid>
    );
}