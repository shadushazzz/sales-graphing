import React, { useState } from 'react';

import 'chart.js/auto';
import './App.css';
import PieChart from './components/pieChart';

import ChartSwitcher from './components/chartSwicther';



const salesData = {
  labels: ['Visa', 'MasterCard', 'Discover', 'PayPal'],
  datasets: [
    {
      label: '2024',
      data: [23550, 12315, 765, 32182],
      backgroundColor: ['#ff6384'],
    },
    {
      label: '2023',
      data: [23344, 11885, 591, 31255],
      backgroundColor: ['#36a2eb'],
    },
    {
      label: '2022',
      data: [24651, 11258, 921, 28907],
      backgroundColor: [ '#ffce56'],
    },
  ],
};









function App() {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <div className='container'>
      <h1>Sales Data</h1>
      <div className='chartContainer'>

        <div >
          <button className={'buttonStyles'} onClick={() => setSelectedYear(2024)}>2024</button>
          <button className={'buttonStyles'} onClick={() => setSelectedYear(2023)}>2023</button>
          <button className={'buttonStyles'} onClick={() => setSelectedYear(2022)}>2022</button>
          <h2>Pie Chart for {selectedYear}</h2>

          <div className='pieChartContainer'>
            <PieChart salesData={salesData} year={selectedYear} />
          </div>
        </div>

        <div>
          <h2>Comparison of Payment Types</h2>
          <div className='graphContainer'>
            <ChartSwitcher salesData={salesData}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
