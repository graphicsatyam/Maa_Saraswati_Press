const mongoose = require("mongoose");
require('dotenv').config();
//creating a database
mongoose.connect(process.env.DBROOT , {
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
 