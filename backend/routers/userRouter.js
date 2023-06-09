const { Router } = require('express');
const router = Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.post('/auth', (req, res) => {
    
    Model.findOne(req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message : 'login failed'})
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    
    Model.find({})
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message : 'login failed'})
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

router.put('/update/:id', (req, res) => {
    
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        if(result) res.json(result);
        else res.status(401).json({message : 'login failed'})
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;