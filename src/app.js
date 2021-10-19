const express= require("express");
const app = express();
const MensRanking = require('../src/models/mens');
require('../src/db/conn');

const router =require('../src/router/men')
const port= process.env.PORT||3000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})