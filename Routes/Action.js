const express = require('express');
const router = express.Router();
const action = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    action 
     .get()
     .then(actions => res.status(200).json(actions))
     .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
});






module.exports = router