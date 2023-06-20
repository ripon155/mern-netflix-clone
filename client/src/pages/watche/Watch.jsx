import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useLocation, Link } from "react-router-dom";
function Watch() {
  const { state } = useLocation();

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon className="icon" />
          Home
        </div>
      </Link>
      <video
        src={state.list ? state.list.video : ""}
        autoPlay
        controls
        className="video"
      />
    </div>
  );
}

export default Watch;
