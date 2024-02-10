import Cards from "./Cards";
import Graph from "./Graph";

export default function Dashboard() {
//   const [companyList, setCompanyList] = useState([{title:'Apple', description:'This is description which helps you to understand about the job. For more details', link:'https://www.apple.com/careers/in/',image:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png'},
// {title:"Microsoft", description:"This is description which helps you to understand about the job. For more details", link:"https://careers.microsoft.com/v2/global/en/home.html", image:"https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2022/06/cropped-microsoft_logo_element.png"},
// { title:"Meta", description:"This is description which helps you to understand about the job. For more details", link:"https://www.metacareers.com/", image:"https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157872.jpg?w:2000"},
// { title:"Netflix", description:"This is description which helps you to understand about the job. For more details", link:"https://jobs.netflix.com/", image:"https://yt3.googleusercontent.com/ytc/AOPolaSbaST1JBNd9phht_n7tFN-VHx0FlvKPHeSDnmu4Q:s900-c-k-c0x00ffffff-no-rj"},
// {title:"Salesforce", description:"This is description which helps you to understand about the job. For more details", link:"https://careers.salesforce.com/en/jobs/?search:&country:India&pagesize:20#results", image:"https://logo-download.com/images/salesforce7.png?ezimgfmt:ngcb1/notWebP"},
// {title:"Google", description:"This is description which helps you to understand about the job. For more details", link:"https://www.google.com/about/careers/applications/jobs/results/?page:1", image:"https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg"},
// {title:"Amazon", description:"This is description which helps you to understand about the job. For more details", link:"https://www.amazon.jobs/en/search?base_query:&loc_query:&latitude:&longitude:&loc_group_id:&invalid_location:false&country:&city:&region:&county:", image:"https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_tile_logo_icon_170594.png"},
// {title:"Flipkart", description:"This is description which helps you to understand about the job. For more details", link:"https://www.flipkartcareers.com/#!/joblist", image:"https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png" }
// ])
  return (
    <div className="dashboard padding">
      <div className="graph-div">
        <Graph />
      </div>
      <div className="dashboard-card">
        <Cards title="Apple" description="This is description which helps you to understand about the job. For more details" link="https://www.apple.com/careers/in/" image="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" />
        <Cards title="Microsoft" description="This is description which helps you to understand about the job. For more details" link="https://careers.microsoft.com/v2/global/en/home.html" image="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2022/06/cropped-microsoft_logo_element.png" />
        <Cards title="Meta" description="This is description which helps you to understand about the job. For more details" link="https://www.metacareers.com/" image="https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157872.jpg?w=2000" />
        <Cards title="Netflix" description="This is description which helps you to understand about the job. For more details" link="https://jobs.netflix.com/" image="https://yt3.googleusercontent.com/ytc/AOPolaSbaST1JBNd9phht_n7tFN-VHx0FlvKPHeSDnmu4Q=s900-c-k-c0x00ffffff-no-rj" />
      </div>
      <div className="dashboard-card margin-top">
        <Cards title="Salesforce" description="This is description which helps you to understand about the job. For more details" link="https://careers.salesforce.com/en/jobs/?search=&country=India&pagesize=20#results" image="https://logo-download.com/images/salesforce7.png?ezimgfmt=ngcb1/notWebP" class="apple" />
        <Cards title="Google" description="This is description which helps you to understand about the job. For more details" link="https://www.google.com/about/careers/applications/jobs/results/?page=1" image="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" />
        <Cards title="Amazon" description="This is description which helps you to understand about the job. For more details" link="https://www.amazon.jobs/en/search?base_query=&loc_query=&latitude=&longitude=&loc_group_id=&invalid_location=false&country=&city=&region=&county=" image="https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_tile_logo_icon_170594.png" />
        <Cards title="Flipkart" description="This is description which helps you to understand about the job. For more details" link="https://www.flipkartcareers.com/#!/joblist" image="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png" class="apple" />
      </div>
    </div>
  )
}
