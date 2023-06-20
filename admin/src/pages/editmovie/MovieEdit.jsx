import "./movieedit.css";
import { useParams } from "react-router-dom";
import useMovieContext from "../../hooks/useMovieContext";
import { useEffect, useState } from "react";

function MovieEdit() {
  const { moviestId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    year: "",
    limit: "",
    isSeries: false,
    genre: "action",
  });

  const { getMovieById, singleMovie, isMovie } = useMovieContext();

  useEffect(() => {
    getMovieById(moviestId);
    setFormData(singleMovie);
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  console.log(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="movieEdit">
      <h1 className="newuserTitle"> Movie Edit </h1>
      {isMovie && (
        <form onSubmit={handleSubmit} className="newuserForm">
          <div className="newuserItem">
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              name="title"
              placeholder="Movie Title"
              onChange={handleChange}
            />
          </div>
          <div className="newuserItem">
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Movie Description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className="newuserItem">
            <label>Movie Released Year</label>
            <input
              type="number"
              name="year"
              onChange={handleChange}
              value={formData.year}
            />
          </div>
          <div className="newuserItem">
            <label>Age Limit</label>
            <input
              type="number"
              name="limit"
              placeholder="Age Limit"
              onChange={handleChange}
              value={formData.limit}
            />
          </div>
          <div className="newuserItem">
            <label>Movie Cover Image</label>

            <input type="file" name="img" />
          </div>
          <div className="newuserItem">
            <label>Video</label>

            <input type="file" name="video" />
          </div>
          <div className="newuserItem">
            <label>Type</label>
            <div className="newuserGender">
              <input
                type="radio"
                name="isSeries"
                id="false"
                value="false"
                onChange={handleChange}
                checked={!formData.isSeries}
              />
              <label htmlFor="false">Movie?</label>
              <input
                type="radio"
                name="isSeries"
                id="true"
                value="true"
                onChange={handleChange}
                checked={formData.isSeries}
              />
              <label htmlFor="true">Series?</label>
            </div>
          </div>
          <div className="newuserItem">
            <label>Genre</label>
            <select
              name="genre"
              id="active"
              defaultValue={formData.genre}
              className="newuserSelect"
            >
              <option value="action">Action</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
          <button className="newuserButton">Create Movie</button>
        </form>
      )}
    </div>
  );
}

export default MovieEdit;
