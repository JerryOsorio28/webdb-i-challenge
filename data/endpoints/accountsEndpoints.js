//import express from the express dependency
const express = require('express');

//setup express router from express
const router = express.Router();

//import database from the seeds folder?
const db = require('../dbConfig');


//<----------GET REQUESTS-------------------
router.get('/', (req, res) => {

    //selects ALL from the database
    db.select('*')
        .from('accounts')
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.json(err);
        })
    })
    
    router.get('/:id', (req, res) => {
        
        //selects the id's only 
        db.select('id')
            .from('accounts')
            .then(id => {
                res.status(200).json(id);
            })
            .catch(err => {
                res.json(err);
            })
        
})

router.post('/', (req, res) => {

    const newAccount = req.body; //fetching body data

    db('accounts')
        .insert(newAccount)
        .then(account => {
            res.status(200).json(account);
        })
        .catch(err => {
            res.json(err);
        })
})

router.put('/:id', (req, res) => {

    const changes = req.body; //tracks the changes

    const { id } = req.params; //fetching id

    db('accounts')
        .where({id: id})
        .update(changes)
        .then(update => {
            res.status(200).json({
                message: `updated ${update} sucessfully`
            });
        })
        .catch(err => {
            res.json(err);
        })

})

router.delete('/:id', (req, res) => {

    const { id } = req.params; //fetching id

    db('accounts')
        .where({id: id})
        .del()
        .then(account => {
            res.status(200).json({
                message: `deleted ${account} sucessfully`
            });
        })
        .catch(err => {
            res.json(err);
        })
})  



module.exports = router;