import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    // console.log(__dirname + "/public/index.html");
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/blog", (req, res) => {
    res.render("");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

