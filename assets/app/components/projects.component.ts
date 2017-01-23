import {Component} from "@angular/core";
import {Project} from './projects/projects';

@Component({
  selector:'my-projects',
  template:`
    <div class="Projects">
      <div *ngFor="let project of projects">
        <h4 class="ProjectTitle"><hr>{{project.title}}</h4>
        <p class="ProjectDesc">{{project.description}}</p>
        <a href={{project.liveUrl}} target="_blank">Check It Out!</a>
        <div *ngIf="project.gitUrl!=''">
          <br>
          <a href={{project.gitUrl}} target="_blank">View On GitHub!</a>
        </div>
      </div>
    </div>
  `,
  styleUrls:['/stylesheets/projects.component.css'],
})

export class ProjectsComponent{
  
  projects = [
    new Project("Generation IV RPG (In Development)","2D-Platformer and RPG with a superhero theme made using C# and the Unity2D engine","https://www.youtube.com/playlist?list=PLpg4AKk1HGCWSZSDYC69--WddOpiVZmc1",""),
    new Project("The Hotfix Engine","A JavaScript/HTML/Angular2 game engine which allows players to manipulate game data","http://hotfixengine.herokuapp.com/","https://github.com/JacobDeming/HotfixEngine"),
    new Project("Site-V-Site","A turn based RPG where character stats are culled from real web site analytics data from the AWIS API","http://site-v-site.herokuapp.com/","https://github.com/waltdakind/site_versus_site_rpg"),
    new Project("Don't Get Me Started","Cards Against Humanity like game where players are given topics and must craft rants about them","https://dontgetmestarted.herokuapp.com/",""),
    new Project("Tavern Tussle","Puzzle game where you pick a traditional RPG character and must overcome three others by gaining power","https://taverntussle.herokuapp.com/","")]
}