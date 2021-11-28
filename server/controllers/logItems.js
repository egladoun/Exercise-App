const express = require("express");
const model = require("../models/logItems");

const app = express.Router();

app
    .get("/", (req, res, next) =>{
        res.send(model.GetAll());
    })
    .get("/wall/:handle", (req, res, next) =>{
        model   .GetWall(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next)    
    })
    .get("/feed/:handle", (req, res, next) =>{
        model   .GetFeed(req.params.handle)
                .then( x=> res.send(x) )
                .catch(next)    
    })
    .get("/search", (req, res, next) =>{
        res.send(model.Search(req.query.q));
    })
    .get("/:id", (req, res, next) =>{
        console.log(req.headers);

        res.send(model.Get(req.params.id));
    })
    .post("/", (req, res, next) =>{
        const newlogItem = model.Add(req.body)

        res.status(201).send(newlogItem);
    })
    .patch("/:id", (req, res, next) =>{
        model   .Update(req.params.id, req.body)
                .then( x=> res.send(x) )
                .catch(next) 
    })
    .delete("/:id", (req, res, next) =>{
        model   .Delete(req.params.id)
                .then( x=> res.send({ deleted: x }) )
                .catch(next) 
    })

    .post("/seed", (req, res, next) =>{
        model   .Seed()
                .then( x=> res.status(201).send("Created") )
                .catch(next)
    })


module.exports = app;