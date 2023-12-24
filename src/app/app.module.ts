import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home } from './components/Home/home.component';
import { About } from './components/about/about.component';
import { Skills } from './components/skills/skills.component';
import { Projects } from './components/projects/projects.component';
import { Resume } from './components/resume/resume.component';
import { Contact } from './components/contact/contact.component';
import { Skill } from './components/skills/skill/skill.component';
import { OneProjet } from './components/projects/projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    Skills,
    Projects,
    Resume,
    Contact,
    Skill,
    OneProjet
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
