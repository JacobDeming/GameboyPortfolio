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
var router_1 = require('@angular/router');
var profile_component_1 = require('./components/profile.component');
var projects_component_1 = require('./components/projects.component');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'Jacob Deming';
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n    <h1 class='Header'>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['/profile']\">Profile</a>\n      <a [routerLink]=\"['/projects']\">Projects</a>\n      <a href=\"/pdf/J.DemingResume.pdf\" target=\"_blank\">Resume</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['/stylesheets/header.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSxrQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNoRSxtQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQTRCbEU7SUFBQTtRQUNFLFVBQUssR0FBRyxjQUFjLENBQUM7SUFDekIsQ0FBQztJQTVCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsMlJBUVQ7WUFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUMvQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyx5QkFBZ0IsQ0FBQztTQUM5QixDQUFDO1FBRUQsZUFBTSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxFQUFDLFVBQVU7Z0JBQ2YsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsU0FBUyxFQUFDLG9DQUFnQjthQUMzQixFQUFDO2dCQUNBLElBQUksRUFBQyxXQUFXO2dCQUNoQixJQUFJLEVBQUMsVUFBVTtnQkFDZixTQUFTLEVBQUMsc0NBQWlCO2FBQzVCLENBQUMsQ0FBQzs7dUJBQUE7SUFJSCxzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvamVjdHNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0cy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDEgY2xhc3M9J0hlYWRlcic+e3t0aXRsZX19PC9oMT5cclxuICAgIDxuYXY+XHJcbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2ZpbGUnXVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2plY3RzJ11cIj5Qcm9qZWN0czwvYT5cclxuICAgICAgPGEgaHJlZj1cIi9wZGYvSi5EZW1pbmdSZXN1bWUucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmVzdW1lPC9hPlxyXG4gICAgPC9uYXY+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6Wycvc3R5bGVzaGVldHMvaGVhZGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gIHByb3ZpZGVyczogW1JPVVRFUl9QUk9WSURFUlNdXHJcbn0pXHJcblxyXG5AUm91dGVzKFt7XHJcbiAgcGF0aDonL3Byb2ZpbGUnLFxyXG4gIG5hbWU6J1Byb2ZpbGUnLFxyXG4gIGNvbXBvbmVudDpQcm9maWxlQ29tcG9uZW50XHJcbn0se1xyXG4gIHBhdGg6Jy9wcm9qZWN0cycsXHJcbiAgbmFtZTonUHJvamVjdHMnLFxyXG4gIGNvbXBvbmVudDpQcm9qZWN0c0NvbXBvbmVudFxyXG59XSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnR7XHJcbiAgdGl0bGUgPSAnSmFjb2IgRGVtaW5nJztcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
