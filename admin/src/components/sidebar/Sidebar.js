import "./sidebar.css";
import SidebarList from "./SidebarList";

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaidIcon from "@mui/icons-material/Paid";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ReportIcon from "@mui/icons-material/Report";

function Sidebar() {
  const items = [
    [
      { icon: LineStyleIcon, name: "Home" },
      // { icon: TimelineIcon, name: "Aynalytics" },
      // { icon: TrendingUpIcon, name: "Trending" },
    ],
    [
      { icon: PeopleAltIcon, name: "Users" },
      { icon: ProductionQuantityLimitsIcon, name: "Movies" },
      // { icon: ProductionQuantityLimitsIcon, name: "Products" },
      // { icon: PaidIcon, name: "Transactions" },
      // { icon: AssessmentIcon, name: "Reports" },
    ],
    // [
    //   { icon: MailOutlineIcon, name: "Mail" },
    //   { icon: ChatBubbleOutlineIcon, name: "Message" },
    //   { icon: FeedbackIcon, name: "Feedback" },
    // ],
    // [
    //   { icon: LineStyleIcon, name: "Manage" },
    //   { icon: TimelineIcon, name: "Aynalytics" },
    //   { icon: ReportIcon, name: "Reports" },
    // ],
  ];

  const names = ["Dashboard", "Quick Menu"];

  const render = names.map((name, index) => {
    const item = items[index];
    return <SidebarList key={index} name={name} item={item} />;
  });

  return (
    <div className="sidebar">
      <div className="sidebarwraper">{render}</div>
    </div>
  );
}

export default Sidebar;
