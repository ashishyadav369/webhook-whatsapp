const express = require("express");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());

let token = "justatoken";
app.listen(4000, () => {
  console.log("server started");
});

app.get("/whatsapp", (req, res) => {
  console.log("sss");
  if (
    req.query["hub.mode"] == "subscribe" &&
    req.query["hub.verify_token"] == token
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(400);
  }
});

app.post("/whatsapp", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.status(200).send("HEHEHEH");
});
