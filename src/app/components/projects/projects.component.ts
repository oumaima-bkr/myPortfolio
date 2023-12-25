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
        true),
        new Project("Commercial Management Project",
        "web application that includes user management, product management, client management, supplier management, customer contacts, employee management as well as purchase and sales orders ",
        "assets/projetStage.png",
        "https://www.youtube.com/",
        null,
        true),
        new Project("Web Video Search Application",
        "Built with Angular and leveraging the YouTube Data API, my website provides an immersive video browsing experience, offering users a seamless way to discover and enjoy diverse content." ,
        "assets/youtube-explorer.png",
        "https://www.youtube.com/",
        "https://github.com/oumaima-bkr/youtube-search-explorer",
        false),
        new Project("Project for Hospital Patient Management",
        "Built with Angular and leveraging the YouTube Data API, my website provides an immersive video browsing experience, offering users a seamless way to discover and enjoy diverse content." ,
        "assets/youtube-explorer.png",
        null,
        "https://github.com/oumaima-bkr/gestion-hopital/settings",
        false)
    ]
}