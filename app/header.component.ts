import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated'

import {ProfileComponent} from './components/profile.component';
import {ProjectsComponent} from './components/projects.component';

@Component({
  selector: 'my-header',
  template: `
    <h1 class='Header'>{{title}}</h1>
    <nav>
      <a [routerLink]="['Profile']">Profile</a>
      <a [routerLink]="['Projects']">Projects</a>
      <a href="#">Resume</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls:['app/styles/header.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([{
  path:'/profile',
  name:'Profile',
  component:ProfileComponent
},{
  path:'/projects',
  name:'Projects',
  component:ProjectsComponent
}])

export class HeaderComponent {
  title = 'Jacob Deming';
}