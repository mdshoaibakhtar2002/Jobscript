import JobCards from './JobCards'
import Filter from '../Resuable/Filter'
import SidePromo from '../Promotion/SidePromo'

export default function Home() {
  return (
    <div className="Home">
      <SidePromo />
      <div className='aside-job-card'>
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
      <div className="aside">
        <Filter />
      </div>
    </div>
  )
}
