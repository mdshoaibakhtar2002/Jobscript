import { Button, Grid, IconButton, ImageListItem, Link, Stack, Typography } from "@mui/material";
import Cards from "./Cards";
import Header from "./Header";
import banner1 from '../../img/banner1.png'
import banner2 from '../../img/Dashboard_pic_1.webp'
import LiveStats from "./LiveStats.tsx";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/system';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Reviews from "./Reviews.tsx";
import React from "react";
import { isMobile } from "react-device-detect";

export default function Dashboard() {
  const [showDrawer, setShowDrawer] = useState(!localStorage.getItem('cookies'));
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(!showDrawer);
  };
  const StyledDrawer = styled(SwipeableDrawer)(() => ({
    '& .MuiDrawer-paper': {
      padding: '20px 20px',
      width: isMobile ? '' : '38vw',
      margin: isMobile ? '95% 1rem' : '28% 1rem',
      borderRadius: '10px',
      height: isMobile ? '34vh' : '16.8rem',
      color: 'gray'
    },
    '& .MuiDrawer-paper::-webkit-scrollbar': {
      display: 'none'
    }
  }));
  console.log('Test');
  return (
    <Grid container mt={isMobile ? 8 : 9.4} spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px' } }} columns={{ xs: 3.3, sm: 12, md: 20 }}>
      <Grid container spacing={{ xs: 0, sm: 0, md: 0 }} sx={{ '&.MuiGrid-root': { width: '100%', marginLeft: '0px', height:'85vh' } }} columns={{ xs: 10, sm: 8, md: 20 }}>
        <Header />
      </Grid>
      <ImageListItem sx={{ margin: '1rem 0rem' }}>
        <img src={banner1} style={{ margin: 'auto', width: isMobile ? '98%' : '88%', cursor: 'pointer' }} id="hover-effect" />
      </ImageListItem>
      <StyledDrawer anchor='left' open={showDrawer} onClose={toggleDrawer()} onOpen={toggleDrawer()}>
        <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer(null)}>
          <CloseIcon sx={{ cursor: 'pointer' }} />
        </IconButton>
        <Stack direction={'row'}>
          <img src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" style={isMobile ? { 'height': '8vh' } : { 'width': '7vw', height: '8vh' }} alt="" />
          <Typography sx={{ margin: isMobile ? '0rem 1rem' : '0rem 1rem', padding: isMobile ? '0rem 1rem' : '0rem 3rem', fontSize: isMobile ? '14px' : '16px' }}>This website uses cookies to ensure you get the best experience on our website. <Link sx={{ cursor: 'pointer' }}>Learn more.</Link></Typography>
        </Stack>
        <Stack spacing={2} margin={isMobile ? '1rem 1rem 0 1rem' : '2rem 3rem 0 3rem'}>
          <Button variant="contained" sx={{ fontSize: isMobile ? '10px' : '13px' }} onClick={() => { setShowDrawer(!showDrawer), localStorage.setItem('cookies', true) }}>Accept all cookies</Button>
          <Button variant="outlined" sx={{ fontSize: isMobile ? '10px' : '13px' }} onClick={() => setShowDrawer(!showDrawer)}>Customize setting</Button>
        </Stack>
      </StyledDrawer>
      <ImageListItem sx={{ margin: isMobile ? '1rem 0rem' : '2rem 0rem', display: 'flex', flexDirection: 'row', width: '100%' }}>
        <img src={banner2} style={{ margin: 'auto', width: isMobile ? '84%' : '30%', height: isMobile ? '50vh' : '' }} id="hover-effect" />
        {!isMobile && <img src={'https://d8it4huxumps7.cloudfront.net/uploads/images/login/login-img-2.png?d=734x734'} style={{ margin: 'auto', width: '34%' }} id="hover-effect" />}
      </ImageListItem>
      <Grid container spacing={12} padding={isMobile ? '0rem 3rem' : '0 6rem'} direction={'row'} sx={{ '&.MuiGrid-root': { width: '100%', margin: '0%', padding: '0' } }}>
        <Grid mt={3} item xs={isMobile ? 12 : 6} sx={{ '&.MuiGrid-item': { padding: isMobile ? '0 1rem' : '0 3rem' } }}>
          <Cards title="Apple" description="This is description which helps you to understand about the job. For more details" link="https://www.apple.com/careers/in/" image="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" />
        </Grid>
        <Grid mt={3} item xs={isMobile ? 12 : 6} sx={{ '&.MuiGrid-item': { padding: isMobile ? '0 1rem' : '0 3rem' } }}>
          <Cards title="Microsoft" description="This is description which helps you to understand about the job. For more details" link="https://careers.microsoft.com/v2/global/en/home.html" image="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2022/06/cropped-microsoft_logo_element.png" />
        </Grid>
        <Grid mt={3} item xs={isMobile ? 12 : 6} sx={{ '&.MuiGrid-item': { padding: isMobile ? '0 1rem' : '0 3rem' } }}>
          <Cards title="Amazon" description="This is description which helps you to understand about the job. For more details" link="https://www.amazon.jobs/en/search?base_query=&loc_query=&latitude=&longitude=&loc_group_id=&invalid_location=false&country=&city=&region=&county=" image="https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_tile_logo_icon_170594.png" />
        </Grid>
        <Grid mt={3} item xs={isMobile ? 12 : 6} sx={{ '&.MuiGrid-item': { padding: isMobile ? '0 1rem' : '0 3rem' } }}>
          <Cards title="Google" description="This is description which helps you to understand about the job. For more details" link="https://www.google.com/about/careers/applications/jobs/results/?page=1" image="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" />
        </Grid>
      </Grid>
      <Reviews />
      <LiveStats />
    </Grid>
  )
}
