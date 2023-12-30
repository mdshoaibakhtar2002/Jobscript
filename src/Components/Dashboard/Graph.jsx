import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Filler
);

export default function Graph() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    // Define two datasets, each with different data and colors
    const datasets = [
        {
            label: "Fulltime Offer",
            data: [14, 25, 19, 22, 23, 29, 19, 29, 15, 22, 25, 10],
            backgroundColor: "#ff5758",
        },
        {
            label: "Internship Offer",
            data: [10, 12, 21, 14, 15, 22.25, 17, 33, 19, 31, 19.35, 13],
            backgroundColor: "#757575"
        }
    ];

    const data = {
        labels,
        datasets,
    };

    return (
              <div style={{maxHeight:"75vh", width:"100%", marginBottom:"10px"}} className='graph'>
                    <div className='center' style={{padding:"0px 10px"}}>
                        <div className='center'>
                            <div className='rect-box-1'></div>
                            <p>Fulltime offer</p>
                        </div>
                        <div className='center'style={{padding:"0px 10px"}}>
                            <div className='rect-box-2'></div>
                            <p>Internship offer</p>
                        </div>
                    </div>
                    <Bar data={data} style={{minWidth:"100%"}}/>
            </div>
    );
}
