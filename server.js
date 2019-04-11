const express = require("express");
const { Heart } = require("./Heart.js");
const app = express();
var port = 1234;

app.use((req, res, next) => {
  console.log(`request for ${req.path}`);
  next();
});

app.use(express.static("public"));

app.get("/heartbeat", Heart.beat);

if (process.env.NODE_ENV === "production") {
  port = 80;
}

app.listen(port, err => {
  console.log(`Listening on port ${port}`);
});
