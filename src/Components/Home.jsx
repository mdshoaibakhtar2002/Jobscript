import JobCards from '../Components/JobCards'
import Filter from '../Components/Filter'

export default function Home() {
  return (
    <div className="Home">
        <div className="aside ">
            <img className='promotion-img' src='https://cuvette.tech/app/static/media/cgipBannerPurple.88a26d80.png'/>
            <img className='promotion-img' src='https://cuvette.tech/app/static/media/cgipCard.380414fa.png'/>
            {/* <img className='promotion-img' src='https://production-cuvette.s3.ap-south-1.amazonaws.com/cuvette-events/whatsapp-platform.gif'/> */}
            {/* <img className='promotion-img' src='https://production-cuvette.s3.ap-south-1.amazonaws.com/cuvette-events/Frame%2028859%20%281%29.png'/> */}
        </div>
        <div className='aside-job-card'>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
            <JobCards/>
        </div>
        <div className="aside">
            <Filter/>
        </div>
    </div>
  )
}
