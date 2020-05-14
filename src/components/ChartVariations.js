import React from 'react';
import { Line } from 'react-chartjs-2'



function ChartVariations(props) {
  const lineGraph = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
      datasets: [
        {
          label: 'Bitcoin',
          fill: false,
          lineTension: 0.01,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65,77, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return <Line data={data} width={'100%'} height={400} options={{ maintainAspectRatio: false }} />
  }
  return (
    <div>
      {lineGraph()}
    </div>
  );
}

export default ChartVariations;
