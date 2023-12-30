
import { Button } from "@mui/material";
import { useState } from "react";
import twillio from "../../img/twilio.png"
import ApplyNow from "../Home/ApplyNow";
import {primaryColor } from "../Theme/Palette";
export default function JobCards() {
    const [modalShow, setModalShow] = useState(false);
    const [modalType, setmodalType] = useState("");
    const handleShow = (e) =>{
        setModalShow(true)
        setmodalType(e)
    }
  return (
    <div className="job-card">
    <div className="card-header">
        <div className="card-subheader">
            <img src={twillio} alt="" className="icon"/>
            <div className="start-text-align">
                <h5>Oracle</h5>
                <p>Hyderabad, India</p>
            </div>
        </div>
        <h5>Remote</h5>
    </div>
    <div className="tech-bubble">
        <div className="bubble">React</div>
        <div className="bubble">Javascript</div>
        <div className="bubble">Git</div>
        <div className="bubble">Figma</div>
    </div>
    <div className="job-details">
        <div className="job-subdetails start-text-align">
            <p className="job-details-header">Job Offer</p>
            <p className="job-details-value">Rs 5 LPA - 7 LPA</p>
        </div>
        <div className="job-subdetails start-text-align">
            <p className="job-details-header">Start Date</p>
            <p className="job-details-value">12/12/2023</p>
        </div>
        <div className="job-subdetails start-text-align">
            <p className="job-details-header">Experience</p>
            <p className="job-details-value">0-3 Years</p>
        </div>
        <div className="job-subdetails start-text-align">
            <p className="job-details-header">Probation Duration</p>
            <p className="job-details-value">2 Months</p>
        </div>
    </div>
    <div className="card-footer">
        <div className="applicantion-dets start-text-align">
            <p className="job-details-value">Apply By 14 August, 2023</p>
            <p style={{fontSize:".7rem"}}>Posted 19h ago</p>
        </div>
        <div className="apply-now">
            <Button className="button" style={{color:primaryColor.color, marginRight:"4px"}} onClick={()=>handleShow("viewDetails")}>View Details</Button>
            <Button className="button" style={{background:primaryColor.background, color:"white", border:"none"}} onClick={()=>handleShow("applyNow")}>Apply Now</Button>
        </div>
    </div>
    <ApplyNow modalShow = {modalShow} setModalShow = {setModalShow} modalType = {modalType}/>
</div>
  )
}
