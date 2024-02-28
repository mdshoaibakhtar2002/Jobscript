import React from 'react';
import { useState, useEffect } from 'react';
import JobCards from './JobCards'
import Filter from '../Resuable/Filter'
import SidePromo from '../Promotion/SidePromo'
import { Drawer, Grid, IconButton } from '@mui/material';
import ViewJobDetails from './ViewJobDetails';
import CloseIcon from '@mui/icons-material/Close';

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
    // <div className="Home">
    //   <SidePromo />
    //   <div className='aside-job-card'>
    //     <JobCards />
    //   </div>
    //   <div className="aside">
    //     <Filter />
    //   </div>
    // </div>
    <Grid container mt={0} padding={'24px 8vw'} marginTop={9}>
      <Grid item xs={12} paddingTop={'0rem !important'}><JobCards /></Grid>
      {/* <Grid item xs={7} paddingTop={'0rem !important'} paddingLeft={4}><ViewJobDetails/></Grid> */}
      <Drawer anchor='left' open={showDrawer} onClose={toggleDrawer()} sx={{
        '& .MuiDrawer-paper': {
          // width: '36%',
          // borderRadius: '.4rem',
          // margin: '19vh auto',
          // padding: '16px',
          boxShadow: 'none',
          background: 'transparent',
          paddingTop: '3vw',
          marginLeft:'1vw',
          width:'21.4vw'
        }
      }}>
        <IconButton sx={{ alignSelf: 'end', padding: '0', position:'absolute', background:'white', width:'23px', top:'2.4rem'}} id='cross-icon' onClick={toggleDrawer()}>
          <CloseIcon sx={{ cursor: 'pointer', width:'14px'}} />
        </IconButton>
        <img className='promotion-img' src='https://cuvette.tech/app/static/media/cgipBannerPurple.88a26d80.png' />
      </Drawer>
    </Grid>
  )
}
