const mongoose = require('mongoose')

const Schema =mongoose.Schema

const inventorySchema =new Schema({
    // Name:{
    //     type:String,
    //     required :true
    // },


    Category:{
        type:String,
        required :true
        // enum: ['Battery','Solar panels', 'Dc Wire', 'Earth Wire', 'Inverters', 'Other']
    },
  
    Discription:{
        type:String,
        required :true
    },

    Brand:{
        type:String,
        required :true
    },

    Price:{
        type:String,
        required :true,
        min: 0
    },
    Quantity:{
        type:Number,
        required :true,
        min: 0
    },

    SellingPrice:{
        type:String,
        required :true,
        min: 0
    },

    Date:{
        type:Date,
        required:false,
        default: Date.now
    }
    
},{timestamps:true})

const Inventory = mongoose.model('inventory', inventorySchema);

module.exports = Inventory;

