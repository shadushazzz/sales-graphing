import { Bar } from "react-chartjs-2";


const BarChart = ({salesData}) => {
    return <Bar data={salesData} />;
  };

  export default BarChart;