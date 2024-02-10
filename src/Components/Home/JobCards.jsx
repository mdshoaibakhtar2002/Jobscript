
import { Button } from "@mui/material";
import { useState, useEffect} from "react";
import ApplyNow from "../Home/ApplyNow";
import { primaryColor } from "../Theme/Palette";
import SideDrawer from "../Resuable/SideDrawer";
import { data } from "../constant/constant_values";
import moment from "moment";

export default function JobCards() {
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setmodalType] = useState("");
    const [jobList, setJobList] = useState([])
    const handleShow = (e) => {
        setModalShow(true)
        setmodalType(e)
    }
    const [showDrawer, setShowDrawer] = useState(false);
    const [contentToShow, setContentToShow] = useState(null)

    const toggleDrawer = (index) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setShowDrawer(!showDrawer);
        setContentToShow(index)
    };
    const getSkillsList = (listOfSkills) =>{
        let array = []
        listOfSkills.map((skill, ind)=>{
            array.push(<div key={ind} className="bubble">{skill}</div>)
        })
        return array;
    }

    useEffect(() =>{
        let array = [...jobList]
        data && data.map((each_company, index) =>{
            array.push(
                <div className="job-card" key={index}>
                <div className="card-header">
                    <div className="card-subheader">
                        <img src={each_company['logo']} alt="" className="icon" />
                        <div className="start-text-align">
                            <h5>{each_company['company_name']}</h5>
                            <p>{each_company['location']}</p>
                        </div>
                    </div>
                    <h5 style={{textTransform:'capitalize'}}>{each_company['work_mode']}</h5>
                </div>
                <div className="tech-bubble">{getSkillsList(each_company['skills'])}</div>
                <div className="job-details">
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Job Offer</p>
                        <p className="job-details-value">{each_company['job_offer']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Start Date</p>
                        <p className="job-details-value">{each_company['joining_date']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Experience</p>
                        <p className="job-details-value">{each_company['experience']}</p>
                    </div>
                    <div className="job-subdetails start-text-align">
                        <p className="job-details-header">Probation Duration</p>
                        <p className="job-details-value">{each_company['probation_period']}</p>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="applicantion-dets start-text-align">
                        <p className="job-details-value">Apply By {moment(each_company['last_date']).format('ll')}</p>
                        <p style={{ fontSize: ".7rem" }}>Posted { Math.floor(Math.random() * 60) + 1} min ago</p>
                    </div>
                    <div className="apply-now">
                        <Button className="button" style={{ color: primaryColor.color, marginRight: "4px" }} onClick={toggleDrawer(index)}>View Details</Button>
                        <Button className="button" style={{ background: primaryColor.background, color: "white", border: "none" }} onClick={() => handleShow("applyNow")}>Apply Now</Button>
                    </div>
                </div>
            </div>
            )
            setJobList(array)
        })
    },[])
    return (
       <>
       {jobList}
        <ApplyNow modalShow={modalShow} setModalShow={setModalShow} modalType={modalType} />
       <SideDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} toggleDrawer={toggleDrawer} contentToShow={contentToShow} />
       </>
    )
}
