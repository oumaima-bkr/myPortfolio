import { Component, Input } from "@angular/core";
import { Icon } from "src/app/models/icon";
import { skillClass } from "src/app/models/skill";




@Component({
    selector:"app-skill",
    templateUrl:"skill.component.html",
    styleUrls:["skill.component.css"]
})


export class Skill{
    @Input()skill!:skillClass

}