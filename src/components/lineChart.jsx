import { Line } from "react-chartjs-2";

export const LineChart = ({salesData}) => {
    return <Line data={salesData} />;
  };