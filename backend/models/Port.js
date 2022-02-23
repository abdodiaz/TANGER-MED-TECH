const mongosse = require('mongoose');

const port=new mongosse.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },idSystem: {
        type: Schema.Types.ObjectId,
        ref: "System"
    }

},{timestamps:true})

module.exports=port;