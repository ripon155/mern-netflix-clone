const connectDB = require("./db/db");
const dotenv = require("dotenv").config({ path: "config.env" });
const app = require("./index");

connectDB();

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`The server run on port ${PORT}`);
});
