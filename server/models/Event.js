const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        
    },
    description :{
        type:String,
        required:true,
    },

    
    
},
{timestamps:true}
);

module.exports = mongoose.model("Event",eventSchema);