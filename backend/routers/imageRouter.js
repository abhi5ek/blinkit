const express = require("express");
const Model = require('../models/userImage');

const router = express.Router();

router.post('/addimage', (req, res) => {
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

module.exports = router;