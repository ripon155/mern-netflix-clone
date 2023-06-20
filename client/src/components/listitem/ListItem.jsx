import "./listitem.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { Link } from "react-router-dom";

function ListItem({ index, list }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link to="/watch" state={{ list }}>
      <div
        className="listitem"
        style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={list ? list.img : ""} alt="" />

        {isHover && (
          <>
            <video src={list ? list.video : ""} autoPlay={true} loop />

            <div className="iteminfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOutlinedIcon className="icon" />
              </div>
              <div className="iteminfoTop">
                <span>{list ? list.duration : ""}</span>
                <span className="limit">+{list ? list.limit : ""}</span>
                <span>{list ? list.year : ""}</span>
              </div>
              <div className="description">{list ? list.description : ""}</div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

ListItem.propTypes = {
  index: PropTypes.number,
  list: PropTypes.string,
};

export default ListItem;
