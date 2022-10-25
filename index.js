const express = require('express');
const app = express();
const port = process.env.Port || 5000;
const cors = require('cors');
app.use(cors());
const allCourses = require('./data/courses.json');
const courseDetails = require('./data/course-details.json');
app.get('/', (req, res) => {
    res.send('Server Running')
})

app.get('/courses', (req, res) => {
    res.send(allCourses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courseDetails.find(c => c.id == id);
    res.send(singleCourse);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courseDetails.find(c => c.id == id);
    res.send(singleCourse);
})
app.listen(port, () => {
    console.log('server is running')
})