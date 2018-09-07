const express = require('express');
const router = express.Router();
const action = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
    action 
     .get()
     .then(actions => res.status(200).json(actions))
     .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
});

router.get('/:id', (req, res) => {
    const { id } =  req.params;
    action 
    .get(id)
     .then(action => {
         if(action) {
             res.status(200).json(actiom);
         } else {
             res.status(404).json({error: 'The action with this ID is not found'});
         }
     })
     .catch(error => res.status(500).json({ error: 'Cannot retrieve action information'}));
});



router.post('/',(req, res) => {
    const { project_id, description, notes } = req.body;
  
    if (!project_id && !description && !notes ) res.status(400).json({ error: 'Please provide a project ID, description, and notes for this action' });
    action
      .insert({ project_id: project_id, description: description, notes: notes })
      .then(action => res.status(201).json( action ))
      .catch(err => res.status(500).json({ error: 'Action not saved' }));
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { project_id, description, notes } = req.body;
  
    action
      .update(id, { project_id, description, notes })
      .then(action => res.status(200).json([action]))
      .catch(err => res.status(500).json({ error: 'Action with that ID not found' }));
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