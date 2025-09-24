const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use((req, res, next) => {
  console.log("middleware is between app and router");
  next(); // next is called to pass the control to the next middleware or router handler
});
app.use("/", indexRoutes);

module.exports = app;
