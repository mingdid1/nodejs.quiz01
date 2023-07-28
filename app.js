const express = require("express");
const Commonrouter = require("./src/routes/common_router");
const memberRouter = require("./src/routes/member/member_router");

const app = express();

app.set("views","./src/views");
app.set("view engine", "ejs");

app.use("/", Commonrouter);
app.use("/member/", memberRouter);

app.listen(3000, ()=>{console.log("3000 서버 연결")} );
