const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/creation' , (err) => {
    if(!err)
    console.log('Connection succedded');
    else
    console.log('Failed' + JSON.stringify(err,undefined,2));
});

module.exports=mongoose;