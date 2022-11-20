import React from 'react';

import {Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
   
    const state = {
        labels: ['Aluminium', 'Aluminium Alloy', 'Copper', 'Lead', 'Nickel', 'Tin', 'Zinc',
                 'Cobalt', 'Steel Rebar', 'Steel Scrap'],
        datasets: [
          {
            label: 'Contract Average Price ($)',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [2562.93, 1801, 9033.13, 2067.38, 25837.5, 31776.75,3643.95, 72077.75, 704.67, 392.1]
          }
        ]
      }
      
    return (
        <div style={{width: "950px",
            height: "950px",     margin: "130px"}}>
          <Bar
            data={state}
            options={{
              responsive: true,
              title:{
                display:true,
                text:'LME indexes',
                fontSize:20
              },
              legend:{
                display:true,
                position:'center'
              },
            }}
          />
        </div>
      );
}




