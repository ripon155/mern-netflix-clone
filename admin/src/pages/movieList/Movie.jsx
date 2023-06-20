import "./movie.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { useEffect } from "react";

import useMovieContext from "../../hooks/useMovieContext";

function Movie() {
  const { deleteMovieById, getALlMovies, movies, isMovie } = useMovieContext();

  useEffect(() => {
    getALlMovies();
  }, [getALlMovies]);

  const handleDelete = (id) => {
    deleteMovieById(id);
  };
  console.log(movies);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="userlistUser">
            <img
              className="userlistImage"
              src={params.row.img ? params.row.img : ""}
              alt=""
            />
          </div>
        );
      },
    },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "genre",
      headerName: "Genre",
      width: 100,
    },
    {
      field: "description",
      headerName: "Description",
      width: 200,
    },
    {
      field: "isSeries",
      headerName: "isSeries",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movies/" + params.row._id}>
              <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userlistDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  let render;

  if (isMovie) {
    render = (
      <DataGrid
        disableSelectionOnClick
        pageSize={8}
        rows={movies}
        columns={columns}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    );
  } else {
    render = <Spinner />;
  }

  return (
    <div className="userlist">
      <Link to="/newmovie" className="link">
        <div className="movieCreate">CreateMovie</div>
      </Link>
      {render}
    </div>
  );
}

export default Movie;
