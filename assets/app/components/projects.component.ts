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
    new Project("The Hotfix Engine","http://hotfixengine.herokuapp.com/"),
    new Project("Site-V-Site","http://site-v-site.herokuapp.com/"),
    new Project("Don't Get Me Started","https://dontgetmestarted.herokuapp.com/"),
    new Project("Right or Wrong Quiz","https://rightorwrongquiz.herokuapp.com/"),
    new Project("Harder Hangman","https://harder-hangman.herokuapp.com/"),
    new Project("NYT Scrubber","https://nyt-scrubber.herokuapp.com"),
    new Project("Jolly Cooperation","jolly-cooperation.herokuapp.com"),
    new Project("Playlist of Power","https://playlistofpower.herokuapp.com/"),
    new Project("Tavern Tussle","https://taverntussle.herokuapp.com/"),
    new Project("Your Gif Collection","https://gifcollection.herokuapp.com/")]
}