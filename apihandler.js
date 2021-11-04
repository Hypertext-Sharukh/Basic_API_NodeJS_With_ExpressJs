
const express = require('express');
const app = express();
var approute =express.Router();
app.use( express.json());



//Get api with Params

approute.get("/fetch/:suppilerid",(res,resp) => {
        if(res.params.suppilerid=="41"){
            resp.status('200').send({
                "data":{}
                })
        }else{

            resp.status('200').send("no data found");
        }    

});

//post api with Params
approute.post('/send/:suppilerid',(res,resp) => {
    if(res.params.suppilerid=="41"){
        resp.status('200').send({
            "status":"UnSucessful"
            })
    }else{

        resp.status('200').send({
            "status":"UNSucessful"
            })
    }    

});


//Get api with query

approute.get('/fetch',(res,resp) => {
    if(res.query.suppilerid=="411"){
        resp.status('200').send({
            "data":{}
            })
    }else{

        resp.status('200').send("no data found")
    }    

});




//post api with query

approute.post('/send',(res,resp) => {
if(res.query.suppilerid=="411"){
    resp.status('200').send({
        "status":"UnSucessful"
        })
}else{

    resp.status('200').send({
        "status":"UNSucessful"
        })
}    

})

//PUT api with Params
approute.put('/modify/:suppilerid',(res,resp) => {
    if(res.params.suppilerid=="41"){
        resp.status('200').send({
            "status":"Sucessful"
            })
    }else{

        resp.status('200').send({
            "status":"UnSucessful"
            })
    }    

});


//PUT api with query

approute.put('/modify',(res,resp) => {
    if(res.query.suppilerid=="411"){
        resp.status('200').send({
            "status":"Sucessful"
            })
    }else{

        resp.status('200').send({
            "status":"UnSucessful"
            })
    }    

});
//PUT api with Params
approute.delete('/delete/:photoid',(res,resp) => {
    if(res.params.photoid=="41"){
        resp.status('200').send({
            "status":"Sucessful"
            })
    }else{

        resp.status('200').send({
            "status":"UnSucessful"
            })
    }    

});


//PUT api with query

approute.delete('/delete',(res,resp) => {
    if(res.query.photoid=="411"){
        resp.status('200').send({
            "status":"Sucessful"
            })
    }else{

        resp.status('200').send({
            "status":"UnSucessful"
            })
    }    

});


module.exports =approute;
