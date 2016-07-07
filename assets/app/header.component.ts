import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {ProfileComponent} from './components/profile.component';
import {ProjectsComponent} from './components/projects.component';

@Component({
  selector: 'my-header',
  template: `
    <h1 class='Header'>{{title}}</h1>
    <nav>
      <a [routerLink]="['/profile']">Profile</a>
      <a [routerLink]="['/projects']">Projects</a>
      <a href="#">Resume</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls:['/stylesheets/header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([{
  path:'/profile',
  name:'Profile',
  component:ProfileComponent
},{
  path:'/projects',
  name:'Projects',
  component:ProjectsComponent
}])

export class HeaderComponent{
  title = 'Jacob Deming';
}