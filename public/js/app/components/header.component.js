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
var profile_component_1 = require('./profile.component');
var projects_component_1 = require('./projects.component');
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = 'Jacob "TKC" Deming';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUEwRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVFLGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBNEJ2RDtJQUFBO1FBQ0UsVUFBSyxHQUFHLG9CQUFvQixDQUFDO0lBQy9CLENBQUM7SUE1QkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLDJSQVFUO1lBQ0QsU0FBUyxFQUFDLENBQUMsbUNBQW1DLENBQUM7WUFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUMseUJBQWdCLENBQUM7U0FDOUIsQ0FBQztRQUVELGVBQU0sQ0FBQyxDQUFDO2dCQUNQLElBQUksRUFBQyxVQUFVO2dCQUNmLElBQUksRUFBQyxTQUFTO2dCQUNkLFNBQVMsRUFBQyxvQ0FBZ0I7YUFDM0IsRUFBQztnQkFDQSxJQUFJLEVBQUMsV0FBVztnQkFDaEIsSUFBSSxFQUFDLFVBQVU7Z0JBQ2YsU0FBUyxFQUFDLHNDQUFpQjthQUM1QixDQUFDLENBQUM7O3VCQUFBO0lBSUgsc0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gJy4vcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Byb2plY3RzQ29tcG9uZW50fSBmcm9tICcuL3Byb2plY3RzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ215LWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxoMSBjbGFzcz0nSGVhZGVyJz57e3RpdGxlfX08L2gxPlxyXG4gICAgPG5hdj5cclxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcHJvZmlsZSddXCI+UHJvZmlsZTwvYT5cclxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvcHJvamVjdHMnXVwiPlByb2plY3RzPC9hPlxyXG4gICAgICA8YSBocmVmPVwiL3BkZi9KLkRlbWluZ1Jlc3VtZS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5SZXN1bWU8L2E+XHJcbiAgICA8L25hdj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICBgLFxyXG4gIHN0eWxlVXJsczpbJy9zdHlsZXNoZWV0cy9oZWFkZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbiAgcHJvdmlkZXJzOiBbUk9VVEVSX1BST1ZJREVSU11cclxufSlcclxuXHJcbkBSb3V0ZXMoW3tcclxuICBwYXRoOicvcHJvZmlsZScsXHJcbiAgbmFtZTonUHJvZmlsZScsXHJcbiAgY29tcG9uZW50OlByb2ZpbGVDb21wb25lbnRcclxufSx7XHJcbiAgcGF0aDonL3Byb2plY3RzJyxcclxuICBuYW1lOidQcm9qZWN0cycsXHJcbiAgY29tcG9uZW50OlByb2plY3RzQ29tcG9uZW50XHJcbn1dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudHtcclxuICB0aXRsZSA9ICdKYWNvYiBcIlRLQ1wiIERlbWluZyc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
