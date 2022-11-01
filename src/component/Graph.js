import {useState} from 'react';
import { Line } from 'react-chartjs-2'; 
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function Graph() {
           var xValues = [27,28,28,29,30,29,29,28];
           var yValues = [23,29,58,75,33,20,73,49];
  const [data, setData]= useState({
    data:{ 
         labels: xValues,
    datasets:[
      {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
      }
    ]
 },
      Options:{
          scales:{
            y:{
             grid:{
                display:false
             }
            }
          }
      }
  })

  return (
    <div className="App" style={{width:'278px'}}>
     <Line data={data.data} options={data.Options} >Hello</Line>
    </div>
  );
}

