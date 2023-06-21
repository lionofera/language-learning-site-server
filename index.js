const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/coursecategory.json');
const courseinfo = require('./data/coursedetails.json');


app.get('/', (req, res) => {
    res.send('api runnning');
});

app.get('/course-categories', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params.id)
    const selectedCourse = courseinfo.find( course => course.cat_id === id);
    res.send(selectedCourse);
})

app.get('/allcourses', (req, res) => {
    res.send(courseinfo)
})

app.listen(port, () => {
    console.log('server running on port', port)
})