import { Component, Input, OnInit } from "@angular/core";
import { Project } from "src/app/models/project";



@Component({
    selector:"app-projet",
    templateUrl:"projet.component.html",
    styleUrls:["projet.component.css"]
})


export class OneProjet implements OnInit{
    isFinished:boolean=false
    showYoutube:boolean=false
    showGithub:boolean=false
    @Input() projet!:Project

    ngOnInit(): void {
        if(this.projet.isFinished){
            this.isFinished=true
        }
        if(this.projet.githublink){
            this.showGithub=true
        }if(this.projet.youtubeLink){
            this.showYoutube=true
        }
    }
    
}