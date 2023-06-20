import "./popular.scss";
import Navbar from "../../components/navbar/Navbar";
import useListContext from "./../../hooks/useListContext";
import { useEffect } from "react";
import PopularItem from "./PopularItem";

function Popular() {
  const { getNewAndPopular, newMovies } = useListContext();

  useEffect(() => {
    getNewAndPopular();
  }, []);

  let content;
  if (newMovies) {
    content = newMovies.map((list, index) => {
      return <PopularItem key={index} list={list} />;
    });
  }

  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="popular">
        <h4 style={{ marginBottom: "10px" }}>New and Popular movie</h4>
        <div className="row">{content}</div>
      </div>
    </>
  );
}

export default Popular;
