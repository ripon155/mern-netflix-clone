import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";

import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStates, setUserstates] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      const res = await axios.get(
        "http://localhost:8800/netflix/api/user/stats",
        {
          headers: {
            Authorization:
              "Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTQwNTUwZTFkNzg4NDY3OTUwMmVjMSIsImlhdCI6MTY4MzM2NTk3OCwiZXhwIjoxNjkyMDA1OTc4fQ.zoQoShvcAuh76KCFU7Rjvx-JYJN1Es3Iss1XrSrrCds",
          },
        }
      );
      res.data.data.map((item) =>
        setUserstates((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New User": item.total },
        ])
      );
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStates} title="User Analytics" dataKey="New User" />
      <div className="homewidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
