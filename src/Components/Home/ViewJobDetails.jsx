
import twillio from "../../img/twilio.png"

export default function ViewJobDetails() {
  return (
    <div className="">
    <div className="card-header">
        <div className="card-subheader">
            <img src={twillio} alt="" className="icon"/>
            <div>
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
        <div className="job-subdetails">
            <p className="job-details-header">Job Offer</p>
            <p className="job-details-value">Rs 5 LPA - 7 LPA</p>
        </div>
        <div className="job-subdetails">
            <p className="job-details-header">Start Date</p>
            <p className="job-details-value">12/12/2023</p>
        </div>
        <div className="job-subdetails">
            <p className="job-details-header">Experience</p>
            <p className="job-details-value">0-3 Years</p>
        </div>
        <div className="job-subdetails">
            <p className="job-details-header">Probation Duration</p>
            <p className="job-details-value">2 Months</p>
        </div>
    </div>
    <div className="card-footer">
        <div className="applicantion-dets">
            <p className="job-details-value">Apply By 14 August, 2023</p>
            <p style={{fontSize:".7rem"}}>Posted 19h ago</p>
        </div>
    </div>
</div>
  )
}
