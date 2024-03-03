import React from 'react';
import { useState, useEffect } from 'react';
import JobCards from './JobCards'
import { Drawer, Grid } from '@mui/material';
import { isMobile } from 'react-device-detect';

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(!showDrawer);
  };
  useEffect(() => {
    if (Math.floor(Math.random() * 11) % 2 === 0) {
      setTimeout(() => {
        setShowDrawer(true)
      }, 5000);
    }
  }, [])
  return (
    <Grid container mt={0} padding={isMobile?'8px 2vw':'24px 8vw'} marginTop={9}>
      <Grid item xs={12} paddingTop={'0rem !important'}><JobCards/></Grid>
      <Drawer anchor='left' open={showDrawer} onClose={toggleDrawer()} sx={{
        '& .MuiDrawer-paper': {
          boxShadow: 'none',
          background: 'transparent',
          paddingTop: '3vw',
          marginLeft:'1vw',
        }
      }}>
        <img className='promotion-img' src='https://cuvette.tech/app/static/media/cgipBannerPurple.88a26d80.png' />
      </Drawer>
    </Grid>
  )
}
