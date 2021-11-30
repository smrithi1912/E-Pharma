const express = require('express');
var bodyParser = require('body-parser');
const path = require('path')
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render("landing");
})

app.get('/login', (req, res) => {
    res.render("../auth/login");
})

app.get('/signup', (req, res) => {
    res.render("../auth/signup");
})

app.get('/signup', (req, res) => {
    res.render("../auth/signup");
})
 
app.get('/medicines', (req, res) => {
    res.render("medicines");
})

app.get('/mombaby', (req, res) => {
    res.render("mombaby");
})

app.get('/nutrition', (req, res) => {
    res.render("nutrition");
})


// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));