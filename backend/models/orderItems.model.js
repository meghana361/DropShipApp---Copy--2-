const mongoose = require('mongoose');
const orderItemSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        rquired:true
    },
    size:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true
    },
price:{
    type:Number,
        required:true
},
discountedPrice:{
    type:Number,
    required:true
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    rquired:true
},
deliverDate:{
    type:Date,
},
})
const OrderItem=mongoose.model('orderItems',orderItemSchema);
module.exports=OrderItem;