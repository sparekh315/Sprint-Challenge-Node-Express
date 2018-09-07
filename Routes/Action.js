const express = require('express');
const router = express.Router();
const action = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    action 
     .get()
     .then(actions => res.status(200).json(actions))
     .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
});

router.post('/', (req, res) => {
    
  });

  router.put('/:id', (req, res) => {

  });
  

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    action
      .remove(id)
      .then(action => {
        if (action) {
          res.status(200).json({message: 'Action succesfully deleted'})
        } else {
          res.status(404).json({ errMsg: `Action not found` });
        }
      })
      .catch(err => res.status(500).json({ error: 'Action could not be deleted' }));
  });



module.exports = router