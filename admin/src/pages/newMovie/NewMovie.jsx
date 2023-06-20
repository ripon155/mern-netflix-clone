import "./newmovie.css";
import useMovieContext from "../../hooks/useMovieContext";
// import Spinner from "../../components/spinner/Spinner";

function NewMovie() {
  const { createNewMovie, movieUploading, progress } = useMovieContext();

  const handleSUbmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    createNewMovie(formData);
    // event.target.reset();
  };

  let renderProgress;
  if (movieUploading) {
    renderProgress = (
      <>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-label">{progress}%</div>
      </>
    );
  }

  return (
    <div className="newUser">
      <h1 className="newuserTitle">New Movie</h1>
      <form onSubmit={handleSUbmit} className="newuserForm">
        <div className="newuserItem">
          <label>Title</label>
          <input type="text" name="title" placeholder="Movie Title" />
        </div>
        <div className="newuserItem">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Movie Description"
          />
        </div>
        <div className="newuserItem">
          <label>Movie Released Year</label>
          <input type="number" name="year" />
        </div>
        <div className="newuserItem">
          <label>Age Limit</label>
          <input type="number" name="limit" placeholder="Age Limit" />
        </div>
        <div className="newuserItem">
          <label>Movie Cover Image</label>

          <input type="file" name="img" />
        </div>
        <div className="newuserItem">
          <label>Video</label>
          {renderProgress}
          <input type="file" name="video" />
        </div>
        <div className="newuserItem">
          <label>Type</label>
          <div className="newuserGender">
            <input type="radio" name="isSeries" id="false" value="false" />
            <label for="false">Movie?</label>
            <input type="radio" name="isSeries" id="true" value="true" />
            <label for="true">Series?</label>
          </div>
        </div>
        <div className="newuserItem">
          <label>Genre</label>
          <select name="genre" id="active" className="newuserSelect">
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
        <button className="newuserButton">Create Movie</button>
      </form>
    </div>
  );
}

export default NewMovie;
