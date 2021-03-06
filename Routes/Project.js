const express = require('express');
const router = express.Router();
const project = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    project 
     .get()
     .then(projects => res.status(200).json(projects))
     .catch(err => res.status(500).json({ error: 'Projects not retrieved'}));
});


router.get('/:id', (req, res) => {
    const { id } =  req.params;
    project
     .get(id)
     .then(project => {
         if(project) {
             res.status(200).json(project);
         } else {
             res.status(404).json({error: 'The project with this ID is not found'});
         }
     })
     .catch(error => res.status(500).json({ error: 'Cannot retrieve project information'}));
});


router.post('/',(req, res) => {
    const { name, description } = req.body;
  
    if (!name && !description ) res.status(400).json({ error: 'Please provide a name and description for this project' });
    project
      .insert({ name: name, description: description })
      .then(project => res.status(201).json( project ))
      .catch(err => res.status(500).json({ error: 'Project not saved' }));
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    project
      .update(id, { name, description })
      .then(project => res.status(200).json([project]))
      .catch(err => res.status(500).json({ error: 'Project with that ID not found' }));
  });


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    project
      .remove(id)
      .then(project => {
        if (project) {
          res.status(200).json({message: 'Project succesfully deleted'})
        } else {
          res.status(404).json({ errMsg: `Project not found` });
        }
      })
      .catch(err => res.status(500).json({ error: 'Project could not be deleted' }));
  });



module.exports = router