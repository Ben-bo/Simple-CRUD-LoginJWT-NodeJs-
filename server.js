const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

const mhsRoute = require("./routes/mhsRoute");
const userRoute = require("./routes/userRoute");
// const lecturerRoute = require("./routes/lecturerRoute");
app.use("/api/", mhsRoute, userRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `SERVER IS RUNNING ON PORT 8080 || ENV PORT : ${process.env.PORT}`
  );
});
