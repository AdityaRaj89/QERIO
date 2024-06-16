const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/AddSkillx")
const UserSchema = new mongoose.Schema({
    empID : String,
    skills : [{
    key : String,
    proficiency : Number
     }]
  });
  
  module.exports = mongoose.model('user', UserSchema);