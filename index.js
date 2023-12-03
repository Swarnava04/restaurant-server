const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.get("/api/restaurantData", (req, res) => {
  res.sendFile(path.join(__dirname, "restaurantData.json"));
});

const PORT = 3031;
app.listen(PORT, () => {
  console.log(`The port is running on ${PORT}`);
});
