const express = require("express")
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
// app.set("view", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username",(req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data){
    res.render("instagram.ejs", {data: instaData[username]});}
    else{res.render("NoPage.ejs", {username});}
});


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


// app.use((req, res) => {
//     console.log("request received");
// })