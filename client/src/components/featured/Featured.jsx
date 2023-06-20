import "./featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PropTypes from "prop-types";
import useListContext from "../../hooks/useListContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Featured({ type }) {
  const { getRandomContent, random } = useListContext();

  useEffect(() => {
    getRandomContent(type);
  }, [getRandomContent, type]);
  let list = random[0];
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genere" id="genre">
            <option value="">Genere</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1390&q=80" />
      <div className="info">
        <img src={list ? list.img : ""} alt="" />
        <span className="des">{list ? list.description : ""}</span>
        <div className="buttons">
          <Link to="/watch" state={{ list }}>
            <button className="play">
              <PlayArrowIcon />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
Featured.propTypes = {
  type: PropTypes.string,
};
export default Featured;
