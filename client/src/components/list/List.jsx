import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listitem/ListItem";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (driction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (driction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (driction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const render = list.content.map((item, index) => {
    return <ListItem key={index} index={index} list={item} />;
  });

  return (
    <div className="list">
      <span className="listtitle">{list.title}</span>
      <div className="wraper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {render}
          {/* <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} /> */}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
List.propTypes = {
  list: PropTypes.object,
};
export default List;
