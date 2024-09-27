const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

fs.readFile(path.join('tasks.json'), (err, data) => {
    if (err) {
        console.error('Error reading tasks.json:', err);
        return;
    }
    tasks = JSON.parse(data);
    console.log(tasks.length + ' tasks loaded.');
});

function saveTasksToFile() {
    fs.writeFile(path.join('tasks.json'), JSON.stringify(tasks, null, 2), (err) => {
        if (err) {
            console.error('Error writing to tasks.json:', err);
        }
    });
}

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    task.id = tasks.length + 1;
    tasks.push(task);
    res.status(201).json(task);
    saveTasksToFile();
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).send();
        saveTasksToFile();
    } else {
        res.status(404).send('Task not found');
    }
});

const HOST = '127.0.0.1';
const PORT = 8888;
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
