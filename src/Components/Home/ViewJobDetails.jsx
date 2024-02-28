
import { Stack, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import { data } from '../constant/constant_values';
import { Box, Typography } from '@mui/material';
import { primaryColor } from '../Theme/Palette';

export default function ViewJobDetails(props) {
    const [jobDetails, setJobDetails] = useState()
    const getSkillsList = (listOfSkills) => {
        let array = []
        listOfSkills.map((skill, ind) => {
            array.push(<div key={ind} className="bubble">{skill}</div>)
        })
        return array;
    }
    const getListOfContent = (list) => {
        let array = []
        list.map((eachItem, ind) => {
            array.push(<li key={ind}>{eachItem}</li>)
        })
        return array;
    }
    useEffect(() => {
        data && data[props.contentToShow] && setJobDetails(
            <Box sx={{ margin: '10px', fontSize: '14px', textAlign:'justify'}}>
                <div className="card-header">
                    <div className="card-subheader">
                        <img src={data[props.contentToShow]['logo']} alt="" className="icon" />
                        <div className="start-text-align">
                        <Typography>{data[props.contentToShow]['job_role']}</Typography>
                        <p>{`${data[props.contentToShow]['company_name']}, ${data[props.contentToShow]['location']}`}</p>
                            {/* <p>{data[props.contentToShow]['location']}</p> */}
                        </div>
                    </div>
                    <Stack direction={'column'}>
                    {/* <Typography style={{ textTransform: 'capitalize' }}>{data[props.contentToShow]['work_mode']}</Typography> */}
                    <Button style={{ background: primaryColor.background, color: "white", border: "none" }} variant='contained' onClick={(e) =>props.handleShow('applyNow')}>Apply Now</Button>
                    </Stack>
                </div>
                {/* <Typography>Mode of work</Typography> */}

                <div className="tech-bubble">{getSkillsList(data[props.contentToShow]['skills'])}</div>
                <div className="job-details">
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Job Offer</p>
                        <p className="job-details-value">{data[props.contentToShow]['job_offer']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Start Date</p>
                        <p className="job-details-value">{data[props.contentToShow]['joining_date']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Experience</p>
                        <p className="job-details-value">{data[props.contentToShow]['experience']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Probation Duration</p>
                        <p className="job-details-value">{data[props.contentToShow]['probation_period']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Work Mode</p>
                        <p className="job-details-value" style={{ textTransform: 'capitalize' }}>{data[props.contentToShow]['work_mode']}</p>
                    </div>
                </div>
                {/* <div className="card-footer">
            <div className="applicantion-dets start-text-align">
              <p className="job-details-value">Apply By {moment(data[props.contentToShow]['last_date']).format('ll')}</p>
              <p style={{ fontSize: ".7rem" }}>Posted {Math.floor(Math.random() * 60) + 1} min ago</p>
            </div>
          </div> */}
                <Box>
                    <Box>
                        <Typography>Requirement:</Typography>
                        <ul>{getListOfContent(data[props.contentToShow]['requirement'])}</ul>
                    </Box>
                    <Box>
                        <Typography>Perks & Benefits:</Typography>
                        <ul>{getListOfContent(data[props.contentToShow]['perks_benefit'])}</ul>
                    </Box>
                    <Box>
                        <Typography>Who can apply:</Typography>
                        <ul>{getListOfContent(data[props.contentToShow]['eligibility'])}</ul>
                    </Box>
                </Box>
            </Box>
        )
    }, [props.contentToShow])
    return (
        <Stack border={'1px solid rgb(237, 237, 237)'} marginTop={'2rem'} boxShadow={'2px 2px 6px 3px #d7d7d6'} borderRadius={'.4rem'} padding={3} height={'100vh'} overflow={'auto'} id='abc'>
            {jobDetails}
        </Stack>
    )
}
