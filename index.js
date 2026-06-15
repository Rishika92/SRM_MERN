
const express=require('express');
const app=express();
function helloWorld(req,res){
    res.send('Hello World');
}
app.get('/', helloWorld);
app.listen(3000,()=>{
    console.log("port running at 3000");
})