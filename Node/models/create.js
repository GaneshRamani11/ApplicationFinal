const mongoose = require('mongoose');

var create = mongoose.model('Create' , {
    Company: { type: String },
    ID: { type: String },
    Chance: { type: String }
    
}); 

module.exports = {create}