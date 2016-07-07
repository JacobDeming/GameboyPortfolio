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
var core_1 = require("@angular/core");
var projects_1 = require('./projects/projects');
var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.projects = [
            new projects_1.Project("Site-V-Site", "http://site-v-site.herokuapp.com/")];
    }
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'my-projects',
            template: "\n    <div class=\"Projects\">\n      <div *ngFor=\"let project of projects\">\n        <h4 class=\"ProjectTitle\"><hr>{{project.title}}</h4>\n        <a href={{project.url}} target=\"_blank\">Check It Out!</a>\n      </div>\n    </div>\n  ",
            styleUrls: ['/stylesheets/projects.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFlNUM7SUFBQTtRQUNFLGFBQVEsR0FBRztZQUNULElBQUksa0JBQU8sQ0FBQyxhQUFhLEVBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFoQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFDLGFBQWE7WUFDdEIsUUFBUSxFQUFDLGtQQU9SO1lBQ0QsU0FBUyxFQUFDLENBQUMscUNBQXFDLENBQUM7U0FDbEQsQ0FBQzs7eUJBQUE7SUFLRix3QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFkseUJBQWlCLG9CQUc3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cy9wcm9qZWN0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonbXktcHJvamVjdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJQcm9qZWN0c1wiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9qZWN0IG9mIHByb2plY3RzXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiUHJvamVjdFRpdGxlXCI+PGhyPnt7cHJvamVjdC50aXRsZX19PC9oND5cclxuICAgICAgICA8YSBocmVmPXt7cHJvamVjdC51cmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5DaGVjayBJdCBPdXQhPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOlsnL3N0eWxlc2hlZXRzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0NvbXBvbmVudHtcclxuICBwcm9qZWN0cyA9IFtcclxuICAgIG5ldyBQcm9qZWN0KFwiU2l0ZS1WLVNpdGVcIixcImh0dHA6Ly9zaXRlLXYtc2l0ZS5oZXJva3VhcHAuY29tL1wiKV1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
