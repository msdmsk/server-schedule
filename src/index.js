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

const {logIn, setProfile, getSchedules, sendSchedule} = require("./api/users");

app.post("/api/users/session", (req,res) => {
  console.log("サーバー側");
  logIn(req,res);
});

app.post("/api/users/:id/edit", (req,res) => {
  setProfile(req,res);
});

app.get("/api/users/:id/schedules", (req,res) => {
  getSchedules(req,res);
});

app.post("/api/users/:id/schedule", (req,res) => {
  sendSchedule(req,res);
});

const {findGroupId, getGroupSchedules, sendGroupSchedule} = require("./api/group");

app.post("/api/users/:id/find_group_id", (req, res) => {
  findGroupId(req,res);
});

app.get("/api/groups/:id/schedules", (req, res) => {
  getGroupSchedules(req,res);
});

app.post("/api/groups/:id/schedule", (req,res) => {
  sendGroupSchedule(req,res);
});