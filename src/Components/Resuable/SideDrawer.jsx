/* eslint-disable react/prop-types */
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { data } from '../constant/constant_values';

const StyledDrawer = styled(SwipeableDrawer)(() => ({
  '& .MuiDrawer-paper': {
    // width: '30%',
    padding: '20px 20px',
    margin: '1rem',
    borderRadius: '10px',
    height: '94vh',
    color:'gray'
  },
  '& .MuiDrawer-paper::-webkit-scrollbar': {
    display: 'none'
  }
}));
export default function SideDrawer({ showDrawer, toggleDrawer, contentToShow }) {
  const [jobDetails, setJobDetails] = useState()
  const getSkillsList = (listOfSkills) => {
    let array = []
    listOfSkills.map((skill, ind) => {
      array.push(<div key={ind} className="bubble">{skill}</div>)
    })
    return array;
  }
  const getListOfContent = (list) =>{
    let array = []
    list.map((eachItem, ind) => {
      array.push(<li key={ind}>{eachItem}</li>)
    })
    return array;
  }
  useEffect(() => {
    data && data[contentToShow] && setJobDetails(
      <Box sx={{ margin: '10px', fontSize: '14px' }}>
        <div className="card-header">
          <div className="card-subheader">
            <img src={data[contentToShow]['logo']} alt="" className="icon" />
            <div className="start-text-align">
              <Typography>{data[contentToShow]['company_name']}</Typography>
              <p>{data[contentToShow]['location']}</p>
            </div>
          </div>
          <Typography style={{ textTransform: 'capitalize' }}>{data[contentToShow]['work_mode']}</Typography>
        </div>
        <div className="tech-bubble">{getSkillsList(data[contentToShow]['skills'])}</div>
        <div className="job-details">
          <div className="job-subdetails start-text-align">
            <p className="job-details-header">Job Offer</p>
            <p className="job-details-value">{data[contentToShow]['job_offer']}</p>
          </div>
          <div className="job-subdetails start-text-align">
            <p className="job-details-header">Start Date</p>
            <p className="job-details-value">{data[contentToShow]['joining_date']}</p>
          </div>
          <div className="job-subdetails start-text-align">
            <p className="job-details-header">Experience</p>
            <p className="job-details-value">{data[contentToShow]['experience']}</p>
          </div>
          <div className="job-subdetails start-text-align">
            <p className="job-details-header">Probation Duration</p>
            <p className="job-details-value">{data[contentToShow]['probation_period']}</p>
          </div>
        </div>
        {/* <div className="card-footer">
          <div className="applicantion-dets start-text-align">
            <p className="job-details-value">Apply By {moment(data[contentToShow]['last_date']).format('ll')}</p>
            <p style={{ fontSize: ".7rem" }}>Posted {Math.floor(Math.random() * 60) + 1} min ago</p>
          </div>
        </div> */}
        <Box>
          <Box>
            <Typography>Requirement:</Typography>
            <ul>{getListOfContent(data[contentToShow]['requirement'])}</ul>
          </Box>
          <Box>
            <Typography>Perks & Benefits:</Typography>
            <ul>{getListOfContent(data[contentToShow]['perks_benefit'])}</ul>
          </Box>
          <Box>
            <Typography>Who can apply:</Typography>
            <ul>{getListOfContent(data[contentToShow]['eligibility'])}</ul>
          </Box>
        </Box>
      </Box>
    )
  }, [contentToShow])
  return (
    <StyledDrawer
      anchor='left'
      open={showDrawer}
      onClose={toggleDrawer(null)}
      onOpen={toggleDrawer(null)}
    >
      {/* <Box sx={{ position:'fixed',display:'flex', justifyContent:'end', width:'28%', borderBottom:'1px solid gray', background:'white', padding:'5px 0'}}> */}
      {/* <Box sx={{display:'flex', justifyContent:'end', padding:'5px 0'}}>
        <IconButton sx={{ alignSelf: 'end', padding: '0' }} onClick={toggleDrawer(null)}>
          <CloseIcon sx={{ cursor: 'pointer' }} />
        </IconButton>
      </Box> */}
      {jobDetails}
    </StyledDrawer>
  );
}