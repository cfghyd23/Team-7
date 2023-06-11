// import React from 'react'
import HeaderIn from './HeaderIn';

// const Intern = () => {
//   return (
//     <HeaderIn />
//   )
// }

// export default Intern
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const Intern = () => {
  // Sample data for the chart
  const data1 = {
    labels: ['Amount left to be raised(in Rs.)', 'Amount raised(in Rs)'],
    datasets: [
      {
        data: [3000, 7000],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      }
    ],borderWidth: 1
  };

  // const options = {
  //   responsive: true, 
  //   maintainAspectRatio: false, 
  //   width: '50%',
  //   height: '50%',

  // };
  return (
    <>
    
    <HeaderIn />
  <Pie data={data1}  />
  </>
  );
};

export default Intern;