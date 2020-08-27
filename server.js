var express=require('express');
var app=express();
var bodyParesr=require('body-parser');
var cors=require('cors')
app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({extended:true}));
var users=require('./routes/users');
var requests=require('./routes/requests');
app.use(cors())
app.use('/api/users',users);
app.use('/api/requests',requests)

app.listen(5000,()=>{
    console.log('server is started');
})