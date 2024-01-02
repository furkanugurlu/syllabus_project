const express = require("express");
const router = require("./src/routers");

const app = express();
const port = process.env.PORT || 3001;

// #region  config process
require("dotenv").config();
require("./src/db/dbConnection");
// #endregion

// #region middleware
app.use(express.json());

// #endregion

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
