const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

class Course {
  constructor(id, name,imageUrl,price,code,duration,rating,releaseDate,description){
      this.id=id;
      this.name=name;
      this.imageUrl=imageUrl;
      this.price=price;
      this.code=code;
      this.duration=duration;
      this.rating=rating;
      this.releaseDate=releaseDate;
      this.description=description;
  }
}

var COURSES = [];


COURSES.push(new Course(0,'Angular: CLI','/assets/images/cli.png',59.99,'XLF-1212',120,3,'May 05, 2022','Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.'));
COURSES.push(new Course(1,'Angular: Forms','/assets/images/forms.png',99.99,'XPS-8796',120,4.5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.'));
COURSES.push(new Course(2,'Angular: http','/assets/images/http.png',45.99,'LKL-1094',90,5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.'));
COURSES.push(new Course(3,'Angular: Router','/assets/images/router.png',75.99,'OHP-1095',80,3.5,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.'));
COURSES.push(new Course(4,'Angular: Animations','/assets/images/animations.png',65.99,'PWY-9381',80,4.6,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.'));
