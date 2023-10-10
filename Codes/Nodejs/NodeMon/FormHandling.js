const express = require("express");
const bodyParser = require("body-parser")


const hostname = '127.0.0.1';
const port = 3000;
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/form.html");
});

app.post("/display", function (req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var id = req.body.id;
  var dept = req.body.dept;
  var inst = req.body.inst;

  var FullName = fname + " " + lname;
  const dict = {
    "Full Name is": FullName,
    "Charusat id": id,
    "Charusat Department": dept,
    "Institute": inst
  },
  max = 5;
  var i = 0;
  // res.end();
  //res.send("<b>Full Name is -</b> " + FullName + "<br>" + "<b>Charusat ID is -</b> " + id + "<br>" + "<b>Department is -</b> " + dept + "<br>" + "<b>Institute is -</b> " + inst + "<br>");
});

app.listen(3005, function () {
  console.log(`server is running on http://${hostname}:${port}/`);
})