const express = require('express');
var router = express.Router();

var { create } = require('../models/create');
var ObID = require('mongoose').Types.ObID;

router.get('/' , (req,res) => {
    create.find((err,docs) => {
        if(!err) {
        res.send(docs);
        }else {
            console.log('Error : ' + JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id' , (req,res) => {
    if(!ObID.isValid(req.params.id)) {
        return res.status(400).send(`No Record with ID: $(req.params.id)`);
    }

    create.findById(req.params.id , (err,doc) => {
        if(!err) {
            res.send(doc);
            }else {
                console.log('Error : ' + JSON.stringify(err,undefined,2));
            }
    });
});

router.post('/' , (req,res) => {
    var cre = new create({
        Company: req.body.Company,
        ID: req.body.ID,
        Chance: req.body.Chance,
    });

    cre.save((err,doc) => {
        if(!err) {
            res.send(doc);
            }else {
                console.log('Error : ' + JSON.stringify(err,undefined,2));
            }
    });
});

module.exports = router;