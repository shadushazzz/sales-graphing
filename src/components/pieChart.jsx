import { Pie } from 'react-chartjs-2';

const PieChart = ({ year, salesData }) => {
    const yearIndex = { 2024: 0, 2023: 1, 2022: 2 }[year];
  
    const pieData = {
      labels: ['Visa', 'MasterCard', 'Discover', 'PayPal'],
      datasets: [
        {
          data: salesData.datasets[yearIndex].data,
          backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
        },
      ],
    };
  
    return <Pie data={pieData} />;
  };


  export default PieChart;