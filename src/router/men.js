const express= require("express");
const router= new express.Router();
const MensRanking = require("../models/mens");

router.get('/',async(req,res)=>{
    res.send("Hello Himanshu")
})

//We'll handle get request to get data of the athletes 
router.get('/mens', async(req,res)=>{
    try{
        const getData = await MensRanking.find({}).sort({"ranking":1});
        res.send(getData);
    }catch(e){
        res.status(400).send(e);
    }
})

//we'll handle get request for individual data by Id
router.get('/mens/:id', async(req,res)=>{
    try{
        const _id =req.params.id;
        const getId = await MensRanking.findById(_id);

        res.send(getId);
    }catch(e){
        res.status(400).send(e);
    }
})
//we'll handle get request for individual data by name
router.get('/mens/:name', async(req,res)=>{
    try{
        const _id =req.params.name;
        const getId = await MensRanking.findById(_id);

        res.send(getId);
    }catch(e){
        res.status(400).send(e);
    }
})
//we'll handle post request

router.post('/mens', async(req,res)=>{
    try{
        const addingData= new MensRanking(req.body)
        console.log(req.body);
        const insertData= await addingData.save();
        res.send(insertData);
    }catch(e){
        res.status(400).send(e);
    }
})

// we'll update usiong  patch method
router.patch('/mens/:id', async(req,res)=>{
    try{
        const _id =req.params.id;
        const getId = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new: true
        });
        res.send(getId);
    }catch(e){
        res.status(400).send(e);
    }
})

router.delete('/mens/:id', async(req,res)=>{
    try{
        const _id=req.params.id;
        const getId = await MensRanking.findByIdAndDelete(_id,req.body);
        res.send(getId);
    }catch(e){
        res.status(400).send(e);
    }
})
module.exports=router;