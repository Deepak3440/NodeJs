const express=require('express');
const app=express();

const db=require('./db');
const Person=require('./models/Person');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);


app.get("/",function(req,res){
    res.send("welcome to hotel");
})







app.listen(3000,()=>{
    console.log("listen port 3000");
})