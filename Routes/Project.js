const express = require('express');
const router = express.Router();
const project = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    project 
     .get()
     .then(projects => res.status(200).json(projects))
     .catch(err => res.status(500).json({ error: 'Projects not retrieved'}));
});






module.exports = router