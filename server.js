const express = require("express");
const { Heart } = require("./Heart.js");
const app = express();
var port = process.env.PORT || 1234;

app.use((req, res, next) => {
  console.log(`request for ${req.path}`);
  next();
});

app.use(express.static("public"));

app.get("/heartbeat", Heart.beat);

app.listen(port, err => {
  console.log(`Listening on port ${port}`);
});
