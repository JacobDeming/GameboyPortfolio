import {Component} from "@angular/core";
import {Project} from './projects/projects';

@Component({
  selector:'my-projects',
  template:`
    <div class="Projects">
      <div *ngFor="let project of projects">
        <h4 class="ProjectTitle"><hr>{{project.title}}</h4>
        <a href={{project.url}} target="_blank">Check It Out!</a>
      </div>
    </div>
  `,
  styleUrls:['/stylesheets/projects.component.css'],
})

export class ProjectsComponent{
  projects = [
    new Project("Site-V-Site","http://site-v-site.herokuapp.com/")]
}