import express from "express";

const app = express();
const port = 8080;


app.use(express.static("public"));

app.get("/", (req, res) => {
    // console.log(__dirname + "/public/index.html");
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

