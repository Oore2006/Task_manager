const express = require('express')
const app = express();
// const tasksRouter =   require('./routes/tasks')
const port = 3000;

// middleware to parse JSON request bodies

app.use(express.json());

const indexRouter = require('./routes/index')
const tasksRouter = require('./routes/tasks')

//  Mount routes
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);

// start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

    
})