import { Component } from "@angular/core";
import { Skill } from "./skill/skill.component";
import { skillClass } from "src/app/models/skill";
import { Icon } from "src/app/models/icon";



@Component({
    selector:"app-skills",
    templateUrl:"skills.component.html",
    styleUrls:["skills.component.css"]

})


export class Skills{
    listOfSkill:skillClass[]=[
        new skillClass("Front-End",[
            new Icon("JavaScript", "<i class='fa-brands fa-js'></i>"),
            new Icon("Angular", "<i class='fa-brands fa-angular'></i>"),
            new Icon("React", "<i class='fa-brands fa-react'></i>"),
            new Icon("Bootstrap", "<i class='fa-brands fa-bootstrap'></i>")
        ]),
        new skillClass("back-End",[
            new Icon("Java", "<i class='fa-brands fa-java'></i>"),
            new Icon("PHP", "<i class='fa-brands fa-php'></i>"),
            new Icon("Python","<i class='fa-brands fa-python'></i>"),
            new Icon("spring Boot", "<i class='fa-solid fa-seedling'></i>"),
            new Icon("JavaEE", "<i class='fa-brands fa-java'></i>")
        ]),
        new skillClass("Databases",[
            new Icon("MySQL", "<i class='fa-solid fa-database'></i>"),
            new Icon("MongoDB", "<i class='fa-brands fa-envira'></i>"),
           
        ]),
        new skillClass("Deployment Systems and Containers:",[
            new Icon("Docker","<i class='fa-brands fa-docker'></i>"),
           
        ]),
        

        new skillClass("Machine Learning ",[
            new Icon("Tenserflow", "<i class='fa-solid fa-brain'></i>"),
           
        ]),
        new skillClass("Deep learning ",[
            new Icon(" Convolutional Neural Networks",null),
            new Icon("Recurrent Neural Networks", null)
           
        ]),new skillClass("CMS ",[
            new Icon("wordpress","<i class='fa-brands fa-wordpress-simple'></i>"),
            new Icon("Shopify",'<i class="fa-brands fa-shopify"></i>')
           
        ]),
        new skillClass(" Development Methodologies",[
            new Icon("Agile/Scrum",null),
           
        ]),
    ]
}