const express = require("express");
const path = require("path"); 
require("./src/db/conn");
require('dotenv').config();
const hbs = require("hbs");
const Contact = require("./src/db/contactSchema");
const bodyParser =require('body-parser');
const { data } = require("jquery");
const app = express();
const port = process.env.PORT;



// to parse the req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//setting the path 
const staticpath = path.join("https://maa-saraswati-press.vercel.app", "./public");
const templatepath = path.join(__dirname, "./templates/views");
const partialpath = path.join(__dirname, "./templates/partials");

// console.log(path.join(__dirname, "../public"));
 
//middleware
app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "./node_modules/jquery/dist")));
app.use(express.static(staticpath)); 


app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
// app.get(Path, callback)
app.get("/", (req, res) => {
    res.render("index");
})


app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/card",(req,res)=>{
      res.render("card");
})
app.get("/details",async (req,res)=>{
    const data = await Contact.find({});
    res.render("details",{data});
})

app.post('/', async (req,res)=>{
    // console.log(req.body)
    const contact_data= new Contact(req.body);
    // console.log(contact_data);
    const result=await contact_data.save();
    // console.log(result);
    // res.send(result);
    res.redirect('/');
})

//server create
app.listen(port, () => {
    console.log(`server is running at the port ${port}`)
})  