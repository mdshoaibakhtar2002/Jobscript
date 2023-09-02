

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler
);


export default function Graph() {
    const labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    const paymentData = {
        labels,
        datasets: [
          {
            data: [14,25,19,22,23,29,19,29,15,22,25,10],
            borderColor: "#76767",
            backgroundColor:"rgba(234, 234, 234, 0.5)",
            fill : true
          }
        ],
      };
    const documentData = {
        labels,
        datasets: [
          {
            data: [10,12,21,14,15,22.25,17,33,19,31,19.35,13],
            borderColor: "#76767",
            backgroundColor:"rgba(234, 234, 234, 0.5)",
            fill : true
          }
        ],
      };
  return (
    <div>
<div className="graph-container space-between">
                <div className="graph-body">
                    <h5>Fulltime Offer</h5>
                    <div className="">
                            <Line data={paymentData} />
                    </div>
                </div>
                <div className="graph-body">
                    <h5>Internship Offer</h5>
                    <div className="">
                            <Line data={documentData} />
                    </div>
                </div>
            </div>
    </div>
  )
}
