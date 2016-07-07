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
            template: "\n    <h1 class='Header'>{{title}}</h1>\n    <nav>\n      <a [routerLink]=\"['/profile']\">Profile</a>\n      <a [routerLink]=\"['/projects']\">Projects</a>\n      <a href=\"#\">Resume</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBMEQsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSxrQ0FBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNoRSxtQ0FBZ0MsaUNBQWlDLENBQUMsQ0FBQTtBQTRCbEU7SUFBQTtRQUNFLFVBQUssR0FBRyxjQUFjLENBQUM7SUFDekIsQ0FBQztJQTVCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsbVBBUVQ7WUFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztZQUMvQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsQ0FBQyx5QkFBZ0IsQ0FBQztTQUM5QixDQUFDO1FBRUQsZUFBTSxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxFQUFDLFVBQVU7Z0JBQ2YsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsU0FBUyxFQUFDLG9DQUFnQjthQUMzQixFQUFDO2dCQUNBLElBQUksRUFBQyxXQUFXO2dCQUNoQixJQUFJLEVBQUMsVUFBVTtnQkFDZixTQUFTLEVBQUMsc0NBQWlCO2FBQzVCLENBQUMsQ0FBQzs7dUJBQUE7SUFJSCxzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvamVjdHNDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0cy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDEgY2xhc3M9J0hlYWRlcic+e3t0aXRsZX19PC9oMT5cclxuICAgIDxuYXY+XHJcbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2ZpbGUnXVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Byb2plY3RzJ11cIj5Qcm9qZWN0czwvYT5cclxuICAgICAgPGEgaHJlZj1cIiNcIj5SZXN1bWU8L2E+XHJcbiAgICA8L25hdj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHN0eWxlVXJsczpbJy9zdHlsZXNoZWV0cy9oZWFkZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgcHJvdmlkZXJzOiBbUk9VVEVSX1BST1ZJREVSU11cclxufSlcclxuXHJcbkBSb3V0ZXMoW3tcclxuICBwYXRoOicvcHJvZmlsZScsXHJcbiAgbmFtZTonUHJvZmlsZScsXHJcbiAgY29tcG9uZW50OlByb2ZpbGVDb21wb25lbnRcclxufSx7XHJcbiAgcGF0aDonL3Byb2plY3RzJyxcclxuICBuYW1lOidQcm9qZWN0cycsXHJcbiAgY29tcG9uZW50OlByb2plY3RzQ29tcG9uZW50XHJcbn1dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudHtcclxuICB0aXRsZSA9ICdKYWNvYiBEZW1pbmcnO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
