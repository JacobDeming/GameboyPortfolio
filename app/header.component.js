"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var profile_component_1 = require('./components/profile.component');
var projects_component_1 = require('./components/projects.component');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'Jacob Deming';
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n    <h1 class='Header'>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['Profile']\">Profile</a>\n      <a [routerLink]=\"['Projects']\">Projects</a>\n      <a href=\"#\">Resume</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/styles/header.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([{
                path: '/profile',
                name: 'Profile',
                component: profile_component_1.ProfileComponent
            }, {
                path: '/projects',
                name: 'Projects',
                component: projects_component_1.ProjectsComponent
            }]), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map