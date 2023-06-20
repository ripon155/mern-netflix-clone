import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import PropTypes from "prop-types";

import useListContext from "../../hooks/useListContext";
import { useEffect, useState } from "react";

function Home({ type }) {
  // const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const { getRandomList, list } = useListContext();

  useEffect(() => {
    getRandomList(type, genre);
  }, [getRandomList, type, genre]);

  const renderList = list.map((item) => {
    return <List key={item._id} list={item} />;
  });
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {renderList}
    </div>
  );
}
Home.propTypes = {
  type: PropTypes.string,
};
export default Home;
