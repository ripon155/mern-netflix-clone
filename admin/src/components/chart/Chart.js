import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ title, data, dataKey, grid }) {
  //   const data = [
  //     {
  //       name: "Jan",
  //       "Active User": 4000,
  //     },
  //     {
  //       name: "Feb",
  //       "Active User": 3000,
  //     },
  //     {
  //       name: "Mar",
  //       "Active User": 2000,
  //     },
  //     {
  //       name: "Apr",
  //       "Active User": 2780,
  //     },
  //     {
  //       name: "May",
  //       "Active User": 1890,
  //     },
  //     {
  //       name: "Jun",
  //       "Active User": 2390,
  //     },
  //     {
  //       name: "Jul",
  //       "Active User": 3490,
  //     },
  //     {
  //       name: "Agu",
  //       "Active User": 3000,
  //     },
  //     {
  //       name: "Sep",
  //       "Active User": 2490,
  //     },
  //     {
  //       name: "Oct",
  //       "Active User": 4490,
  //     },
  //     {
  //       name: "Nov",
  //       "Active User": 1490,
  //     },
  //     {
  //       name: "Dec",
  //       "Active User": 5490,
  //     },
  //   ];
  return (
    <div className="chart">
      <h3 className="charttitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
