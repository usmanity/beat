const express = require("express");
const { Heart } = require("./Heart.js");
const app = express();

app.use((req, res, next) => {
  console.log(`request for ${req.path}`);
  next();
});

app.use(express.static("public"));

app.get("/heartbeat", Heart.beat);

let port = process.env.NODE_ENV || 1234;
app.listen(port, err => {
  console.log(`Listening on port ${port}`);
});
