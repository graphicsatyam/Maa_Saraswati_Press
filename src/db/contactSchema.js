const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
         name:String,
         email:String,
         subject:String,
         discription:String,
})

const Contact = mongoose.model('contact', Schema)

module.exports = Contact;