 var express=require('express');
var router=express.Router();
var db=require('../db');
router.route('/')
.get((req,res)=>{
    db.RoomateRequest.find({},(err,roommateRequests)=>{
     if(err) res.status(500).send(err)
     console.log(roommateRequests)
     res.status(200).send(roommateRequests)
    })
})
.post((req,res)=>{
    var newRoommateRequest=new db.RoomateRequest(req.body);
    newRoommateRequest.save((err,request)=>{
        if(err) res.status(500).send(err)
        res.status(200).send(request)
    })
})
router.route('/:id')
.get((req,res)=>{
    var id=req.params.id
    db.RoomateRequest.findById({_id:id},(err,roommateRequests)=>{
        if(err) res.status(500).send(err)
        res.status(200).send(roommateRequests)
    })
})
.delete((req,res)=>{
    var id=req.params.id
    db.RoomateRequest.findByIdAndDelete({_id:id},(err,roommateRequests)=>{
        if(err) res.status(500).send(err)
        res.status(200).send(roommateRequests)
    })
})
router.route('/search/:location/:city')
.get((req,res)=>{
   var location=req.params.location
   var city=req.params.city
   db.RoomateRequest.find({location:location,city:city},(err,roommateRequests)=>{
       if(err) res.status(500).send(err)
       res.status(200).send(roommateRequests)
   })
})


module.exports=router;