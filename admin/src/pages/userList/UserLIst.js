import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";
import { rows } from "../../dummyData";

function UserLIst() {
  // const img = "assets/profile.jpg";

  const [row, setRow] = useState(rows);

  const handleDelete = (id) => {
    setRow(row.filter((item) => item.id !== id));
  };

  // const img =
  //   "https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1682997843692-c3cf1cb9caf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userlistUser">
            <img className="userlistImage" src={params.row.avater} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlistEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userlistDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        disableSelectionOnClick
        pageSize={8}
        rows={row}
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}

export default UserLIst;
