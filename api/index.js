const morgan = require("morgan");
const express = require("express");
const app = express();
var cors = require("cors");

const userRoute = require("./routes/userRouter");
const movieRoute = require("./routes/movieRouter");
const listRoute = require("./routes/listRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

app.use("/netflix/api/user", userRoute);
app.use("/netflix/api/movie", movieRoute);
app.use("/netflix/api/list", listRoute);

module.exports = app;
