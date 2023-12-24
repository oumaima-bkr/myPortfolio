import { Component } from "@angular/core";
import { Project } from "src/app/models/project";



@Component({
    selector:"app-projects",
    templateUrl:"projects.component.html",
    styleUrls:["projects.component.css"]

})


export class Projects{


    myProjectsList:Project[]=[
        new Project("My Portfolio",
        "My portfolio website is developed using Angular and Spring Boot.",
        "assets/portfolio.png",
        "https://www.youtube.com/",
        null,
        false)
    ]
}