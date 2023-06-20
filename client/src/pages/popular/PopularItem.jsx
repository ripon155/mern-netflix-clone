import "./popular.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PopularItem({ list }) {
  console.log(list);
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Link to="/watch" state={{ list }} className="link">
        <div
          className="list-card"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img src={list.img} alt="" />
          <div className="movie-description">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
          </div>

          {isHover && (
            <video src={list ? list.video : ""} autoPlay={true} loop />
          )}
        </div>
      </Link>
    </>
  );
}
PopularItem.propTypes = {
  list: PropTypes.object,
};
export default PopularItem;
