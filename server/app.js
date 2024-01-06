const express = require("express");
const app = express();
const router = require("./src/routers");

// #region  config process
require("dotenv").config();
require("./src/db/dbConnection");
// #endregion

const port = process.env.PORT || 3001;

// #region middleware
app.use(express.json());
// #endregion

app.get("/api", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
