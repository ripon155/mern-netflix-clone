import "./recentandpopular.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";

function RecentAndPopular() {
  return (
    <div className="recentandpopular">
      <Navbar />
      <Featured />
    </div>
  );
}

export default RecentAndPopular;
