import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn:'root'
})

export class CourseService {

    retrieveAll():Course[]{
        return COURSES;
    }

}

var COURSES: Course [] = [];


COURSES.push(new Course(0,'Angular: CLI','/assets/images/cli.png',59.99,'XLF-1212',120,3,'May 05, 2022','Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.'));
COURSES.push(new Course(1,'Angular: Forms','/assets/images/forms.png',99.99,'XPS-8796',120,4.5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.'));
COURSES.push(new Course(2,'Angular: http','/assets/images/http.png',45.99,'LKL-1094',90,5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.'));
COURSES.push(new Course(3,'Angular: Router','/assets/images/router.png',75.99,'OHP-1095',80,3.5,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.'));
COURSES.push(new Course(4,'Angular: Animations','/assets/images/animations.png',65.99,'PWY-9381',80,4.6,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.'));

    