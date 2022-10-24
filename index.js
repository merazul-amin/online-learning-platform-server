const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const cors = require('cors');
app.use(cors());
const allCourses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('Server Running')
})

app.get('/courses', (req, res) => {
    res.send(allCourses);
})
app.listen(port, () => {
    console.log('server is running')
})