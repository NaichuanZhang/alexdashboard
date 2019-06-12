import React from 'react';
import { Chart } from '@bit/primefaces.primereact.chart';



const ChartwithData = () => {
  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };
  return (
    <div style={{ width: 400 }}>
      <Chart type='pie' data={ data } />
    </div>
  )
}
 
export default ChartwithData;
