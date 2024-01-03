import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 8080;

var posts = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts : posts});
    
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
    
});

app.get("/read-more", (req, res) => {
    const data = {
        title: "Blog Title",
        subtitle: "Category",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie"
    };
    res.render("blogs.ejs", data);
});

app.post("/submit", (req, res) => {
    const post = {
        title: req.body["blog-title"],
        subtitle: req.body["blog-subtitle"],
        content: req.body["blog-content"]
    }

    posts.push(post);

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

