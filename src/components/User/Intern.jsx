// import React from 'react'
// import HeaderIn from './HeaderIn';


// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import Sidebar from '../Sidebar';

// ChartJS.register(ArcElement, Tooltip, Legend);
// const Intern = () => {
//   // Sample data for the chart
//   const data1 = {
//     labels: ['Amount left to be raised(in Rs.)', 'Amount raised(in Rs)'],
//     datasets: [
//       {
//         data: [3000, 7000],
//         backgroundColor: ['#FF6384', '#36A2EB'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB'],
//       }
//     ],borderWidth: 1
//   };

//   // const options = {
//   //   responsive: true, 
//   //   maintainAspectRatio: false, 
//   //   width: '50%',
//   //   height: '50%',

//   // };
//   return (
//     <>
    
//     {/* <HeaderIn /> */}
//     <Sidebar/>
//   <Pie data={data1}  />
//   </>
//   );
// };

// export default Intern;

import React from 'react'
import Sidebar from '../Sidebar'
import PieChart from '../PieChart'
import '../User/Intern.css'

const Intern = () => {
  //const viewHeight = window.outerHeight;
  return (
    <div className='container'>
      <div className='sidebar'><Sidebar/></div>
      <div className='main-content' style={{height:"300px",width:"300px"}}>
      <PieChart />
      </div>
      
    </div>
  )
}

export default Intern