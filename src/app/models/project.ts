export class Project{
    titre:string
    descreption:string
    imageLink:string
    youtubeLink:string | null
    githublink:string | null
    isFinished:boolean
    constructor(titre:string ,descreption:string ,imageLink:string , youtubeLink:string | null ,githublink:string | null,isFinished:boolean){
           this.titre=titre
           this.descreption=descreption
           this.imageLink=imageLink
           this.youtubeLink=youtubeLink
           this.githublink=githublink 
           this.isFinished=isFinished
    }
}