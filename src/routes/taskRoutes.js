const express = require('express')
const router = express.Router();

const Task = require('../models/task')

router.get( '/' , async (req, res) => {
  const tasksData = await Task.find()
    
  console.log(tasksData, 'data')
  res.json(tasksData)
 
})

router.get('/:id', async (req  , res) => {
  const task = await Task.findById(req.params.id );
  res.json(task)
})

router.post('/' , async (req , res) =>{
  const {title , description } = req.body;
  const task = new Task({title, description})
  await task.save()
  res.json({'status' : "tarea guardada"})
})

router.put('/:id' , async (req  , res) => {
  const {title , description} = req.body;
  const taskEdit = {title , description};
  await Task.findByIdAndUpdate(req.params.id , taskEdit);
  res.json({'status' : "tarea actualizada"})
})

router.delete('/:id', async (req  , res) => {
  await Task.findByIdAndRemove(req.params.id );
  res.json({'status' : "tarea eliminada"})
})







module.exports = router;