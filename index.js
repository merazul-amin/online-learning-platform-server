const express = require('express');
const app = express();
const port = process.env.Port || 5000;
app.use(cors());
const allCourses = require('./data/courses.json');

app.get('/courses', (req, res) => {

})