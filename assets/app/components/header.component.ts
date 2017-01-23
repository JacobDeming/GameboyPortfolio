import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProjectsComponent} from './projects.component';

@Component({
  selector: 'my-header',
  template: `
    <h1 class='Header'>{{title}}</h1>
    <nav>
      <a [routerLink]="['/profile']">Profile</a>
      <a [routerLink]="['/projects']">Projects</a>
      <a href="/blog">Blog</a>
      <a href="/pdf/J.DemingResume.pdf" target="_blank">Resume</a>
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
  title = 'Jacob "TKC" Deming';
}