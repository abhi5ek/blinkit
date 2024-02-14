const express = require("express");
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        // setTimeout( () => { res.json(result); },3000 )
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// getall----used for fetching data
router.get('/getall', (req, res) => {

    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

// getbyid
router.get('/getbyid/:id', (req, res) => {
    // console.log(req.params.id);
    
    // Model.findOne({_id : req.params.id})
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.send('Response from user getbyid');
});

router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email)

    // 1.find function matches and returns all the documents
    // 2.findOne function matches and returns only the first document 
    Model.findOne({email : req.params.email})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.send('Response from user getbyemail');
});

// delete
router.delete('/delete/:id', (req, res) => {
    // res.send('Response from user delete')
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

// upadte
router.put('/update/:id', (req, res) => {
    // res.send('Response from user update');
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result !== null) res.json(result);
        else res.status(401).json({message : 'login failed'})
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
