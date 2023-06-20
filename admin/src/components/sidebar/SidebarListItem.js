import "./sidebar.css";
import { Link } from "react-router-dom";

function SidebarListItem({ icon }) {
  const TagName = icon.icon;
  return (
    <>
      <li className="sidebarlistitem ">
        <TagName className="sidebaricon" />
        <Link
          className="sidebarlinkstyle"
          to={`${icon.name === "Home" ? "/" : `/${icon.name.toLowerCase()}`}`}
        >
          {icon.name}
        </Link>
        {/* {icon.name} */}
      </li>
    </>
  );
}

export default SidebarListItem;
