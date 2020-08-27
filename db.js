var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/roommatefinder');
//Users Schema
var userSchema=mongoose.Schema({
     name:{
         type:String,
         required:true
     },
     phone:Number,
     email:String,
     password:String,
    //  createdDate:{
    //      type:Date,
    //      required:Date.now
    //  }
})
exports.User=mongoose.model('User',userSchema,'users');
//RoomMate request------>
var roommateRequestSchema=mongoose.Schema({
    location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    userId:mongoose.Schema.Types.ObjectId,
    roomates:{
        type:Number,
        default:1
    },
    photo:String
})
exports.RoomateRequest=mongoose.model('RoomateRequest',roommateRequestSchema,'roommateRequests');