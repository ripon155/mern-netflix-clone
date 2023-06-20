import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import useAuthContext from "../../hooks/useAuthContext";

function Topbar() {
  const { logOut } = useAuthContext();

  const handleClick = () => {
    logOut();
  };

  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topbarLeft">
          <span className="logo" onClick={handleClick}>
            LogOut
          </span>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon className="topbarIcons" />
            <span className="topiconbatch">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon className="topbarIcons" />
            <span className="topiconbatch">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon className="topbarIcons" />
          </div>
          <img src="assets/profile.jpg" alt="" className="profilepicture" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
