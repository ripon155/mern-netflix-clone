import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSm() {
  return (
    <div className="widgetSM">
      <span className="widgetsmtitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="assets/profile.jpg" alt="" className="widgetSmimg" />
          <div className="widgetsmUser">
            <span className="widegSmUsername">John Doe</span>
            <span className="widegSmUserTitle">SOftware Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="assets/profile.jpg" alt="" className="widgetSmimg" />
          <div className="widgetsmUser">
            <span className="widegSmUsername">John Doe</span>
            <span className="widegSmUserTitle">SOftware Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
