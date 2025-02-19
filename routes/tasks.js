//  routes/tasks.js

const express = require('express')
const router = express.Router();

// In-memory array to store tasks

let tasks = [
    { id: 1, title: 'Buy groceries', completed: false  },
    { id: 2, title: 'Do laundry ', completed: false },

];

// GET /tasks/:id - Retrieve a single task by id
router.get('/:id',(req, res) => {
    const id =  parseInt(req.params.id); 
    const task =  tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({error: 'Task not found' });

    }
   

    
} );

// POST / tasks  - create a new task
router.post('/', (req, res) => {
    const {title } = req.body;
    if(!title) {
        return res.status(400).json({ error: 'Title is required'})

    }
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    }
    tasks.push(newTask);
    res.status(201).json(newTask);

})

// PUT /tasks/:id - Update a task    
router.put('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const task =   tasks.find(t => t.id === id);
   
    if (task) {
        const { title, completed } = req.body;
        if (title !== completed ) task.title = title;
        if(completed !== undefined ) task.completed = completed;
        res.json(task);

    } else {
            res.status(404).json({ error: 'Task not found'})

        }
        
})

// POSTS/tasks - Create  a new task

router.post('/', (req, res) => {
    const{ title } = req.body;
    if (!title) return res.status(400).json({ error: 'Talk is required' });

    
    const newTask = {
        id : tasks.length + 1,
        title,
        completed: false 
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
})

// PUT /tasks/:id - update  a task
// router.put('/:id', (req, res ) =>{
//     const id = parseInt(req.params.id);
//     const task = tasks.find( t => t.id === id);
//     if (tasks) {
//         const { title,  completed } = req.body;
//         if (title !== undefined ) task.title = title;
//         if (completed !== undefined) tasks.completed = completed;
//         res.json(task);
//     } else {
//         res.status(404).json({ error: 'Task not found' })
//     }
// });

// 
// PUT /tasks/:id
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task =  tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ error: 'Task not found'});

    const {title, completed} = req.body;
    if(title !== undefined) task.title = title
    if(completed !== undefned) task.completed = completed;
    res.json(task);
})

// DELETE /tasks/:id - Declare a task 
router.delete('/:id', (req, res) =>{
    const id  = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);    
    if (index !== -1){
        const deletedTask = tasks.splice(index, 1)
        res.json(deletedTask[0]);
    } else {
        res.status(404).json({ error: 'Task not found' })
}
})

module.exports = router;
