const express = require("express")
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("C:\Learning_Backend\EJSDIR\views\home.ejs");
});


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
// })