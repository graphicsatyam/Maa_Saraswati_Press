const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb+srv://satyam:12345678S@cluster0.5nf7ss4.mongodb.net/Printing_Press", {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
