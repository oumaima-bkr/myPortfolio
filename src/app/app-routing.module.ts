import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about.component';
import { Home } from './components/Home/home.component';
import { Skills } from './components/skills/skills.component';
import { Projects } from './components/projects/projects.component';
import { Resume } from './components/resume/resume.component';
import { Contact } from './components/contact/contact.component';




const routes: Routes = [
  {path:'',component:Home},
  {path:'about',component:About},
  {path:'skills',component:Skills},
  {path:"projects",component:Projects},
  {path:"resume",component:Resume},
  {path:"contact",component:Contact}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
