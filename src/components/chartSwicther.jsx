import React, { useState, useRef } from 'react';
import BarChart from './barChart';
import { LineChart } from './lineChart';
import '../App.css';

const ChartSwitcher = ({salesData}) => {
  const [chartType, setChartType] = useState('bar');
  
  // Reference to scroll position
  const chartSectionRef = useRef(null);

  const handleChartSwitch = (type) => {
    setChartType(type);

    if (chartSectionRef.current) {
      chartSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={chartSectionRef}>
      <div className="chart-buttons">
        <button
          className={chartType === 'bar' ? 'active' : ''}
          onClick={() => handleChartSwitch('bar')}
        >
          Bar Chart
        </button>
        <button
          className={chartType === 'line' ? 'active' : ''}
          onClick={() => handleChartSwitch('line')}
        >
          Line Chart
        </button>
      </div>

      {/* Keep both charts mounted but conditionally display them */}
      <div style={{ display: chartType === 'bar' ? 'block' : 'none' }}>
        <BarChart salesData={salesData} />
      </div>
      <div style={{ display: chartType === 'line' ? 'block' : 'none' }}>
        <LineChart salesData={salesData} />
      </div>
    </div>
  );
};


export default ChartSwitcher;