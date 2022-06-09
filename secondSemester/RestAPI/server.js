const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongo = require("mongodb").MongoClient;
const url = "mongodb://10.115.2.28:8017";

let db;
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error("Bling:   " + err);
      return;
    } else {
      console.log("found");
    }
    db = client.db("students");
    console.log("running");
  }
);

app.get("/students", (req, res) => {
  db.collection("students")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      res.send(result);
    });
});

app.get("/students/:name", (req, res) => {
  db.collection("students")
    .find({name: req.params.name})
    .toArray(function (err, result) {
      if (err) throw err;

      res.send(result);
    });
});

app.post("/students", (req, res) => {
  const content = req.body;
  db.collection("students").insert(content);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
