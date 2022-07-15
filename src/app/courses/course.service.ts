import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn:'root'
})

export class CourseService {

    private coursesUrl:string='http://localhost:3100/api/courses';

    constructor( private httpClient:HttpClient){

    }

    retrieveAll():Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrl);
        //return COURSES;
    }

    retrieveById(id:number):Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
        //return COURSES.find((courseIterator:Course) => courseIterator.id ===id);
    }

    save(course:Course):Observable<Course>{
        if(course.id){
            //const index = COURSES.findIndex((courseIterator:Course) => courseIterator.id ===course.id);
            //COURSES[index]=course;
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
            
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);

        }
            
    }

    deleteById(id:number) : Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }


}


var COURSES: Course [] = [];

/** 
COURSES.push(new Course(0,'Angular: CLI','/assets/images/cli.png',59.99,'XLF-1212',120,3,'May 05, 2022','Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.'));
COURSES.push(new Course(1,'Angular: Forms','/assets/images/forms.png',99.99,'XPS-8796',120,4.5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.'));
COURSES.push(new Course(2,'Angular: http','/assets/images/http.png',45.99,'LKL-1094',90,5,'May 03, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.'));
COURSES.push(new Course(3,'Angular: Router','/assets/images/router.png',75.99,'OHP-1095',80,3.5,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.'));
COURSES.push(new Course(4,'Angular: Animations','/assets/images/animations.png',65.99,'PWY-9381',80,4.6,'May 05, 2022','Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.'));
**/
    