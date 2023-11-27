import { Chart } from "react-google-charts";
import useBookings from "../../Hooks/useBookings";
import useWinner from "../../Hooks/useWinner";

const ProfileChart = () => {
const [bookings] = useBookings();
const [winningInfo] = useWinner();

const data = [
  ["Task", "Hours per Day"],
  ["bookings", bookings?.length],
  ["winnings", winningInfo?.length],
];

const options = {
  title: "My All Time Activity",
  is3D: true,
};

  return <div>
     <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  </div>;
};

export default ProfileChart;
