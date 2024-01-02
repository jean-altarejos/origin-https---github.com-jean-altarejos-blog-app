import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/single-blog", (req, res) => {
    res.render("blogs.ejs", {
        blogTitle: title,
        blogSubtitle: subtitle,
        blogContent: content
    });
});

app.post("/submit", (req, res) => {
    res.render("blogs.ejs", {
        title: req.body["blog-title"],
        subtitle: req.body["blog-subtitle"],
        content: req.body["blog-content"]
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

