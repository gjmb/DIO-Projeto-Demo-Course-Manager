import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{

    courses: Course [] = [];

    ngOnInit(): void {
        this.courses.push(new Course(1,'Angular: Forms','',99.99,'XPS-8796',120,0,'05/03/2022'));
        this.courses.push(new Course(2,'Angular: http','',45.99,'LKL-1094',90,0,'05/03/2022'));
    }

}