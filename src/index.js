const express = require("express");
 const app = express();
 const apiServer = app.listen(3000, () => { console.log("PORT:" + apiServer.address().port) });
 const bodyParser = require("body-parser");
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());

 app.get("/", (req, res) => {
    res.json({
      room_id: 1,
      schedules: [
        { schedule: "会議" },
        { schedule: "出張" },
        { schedule: "ライブ" },
      ],
    });
  });

app.post("/api/users/session", (req,res) => {
});

app.post("/api/users/:id/edit", (req,res) => {
});

app.post("/api/users/:id/edit/schedules", (req,res) => {
});

app.post("/api/users/:id/schedules", (req,res) => {
});

app.post("/api/users/:id/find_group_id", (req, res) => {
});

app.get("/api/groups/:id/schedules", (req, res) => {
});

app.post("/api/groups/:id/edit/schedules", (req,res) => {
});