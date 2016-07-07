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
            new projects_1.Project("Site-V-Site", "http://site-v-site.herokuapp.com/"),
            new projects_1.Project("Don't Get Me Started", "https://dontgetmestarted.herokuapp.com/"),
            new projects_1.Project("Right or Wrong Quiz", "https://rightorwrongquiz.herokuapp.com/"),
            new projects_1.Project("Harder Hangman", "https://harder-hangman.herokuapp.com/"),
            new projects_1.Project("NYT Scrubber", "https://nyt-scrubber.herokuapp.com"),
            new projects_1.Project("Jolly Cooperation", "jolly-cooperation.herokuapp.com"),
            new projects_1.Project("Playlist of Power", "https://playlistofpower.herokuapp.com/"),
            new projects_1.Project("Tavern Tussle", "https://taverntussle.herokuapp.com/"),
            new projects_1.Project("Your Gif Collection", "https://gifcollection.herokuapp.com/")];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFlNUM7SUFBQTtRQUNFLGFBQVEsR0FBRztZQUNULElBQUksa0JBQU8sQ0FBQyxhQUFhLEVBQUMsbUNBQW1DLENBQUM7WUFDOUQsSUFBSSxrQkFBTyxDQUFDLHNCQUFzQixFQUFDLHlDQUF5QyxDQUFDO1lBQzdFLElBQUksa0JBQU8sQ0FBQyxxQkFBcUIsRUFBQyx5Q0FBeUMsQ0FBQztZQUM1RSxJQUFJLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUMsdUNBQXVDLENBQUM7WUFDckUsSUFBSSxrQkFBTyxDQUFDLGNBQWMsRUFBQyxvQ0FBb0MsQ0FBQztZQUNoRSxJQUFJLGtCQUFPLENBQUMsbUJBQW1CLEVBQUMsaUNBQWlDLENBQUM7WUFDbEUsSUFBSSxrQkFBTyxDQUFDLG1CQUFtQixFQUFDLHdDQUF3QyxDQUFDO1lBQ3pFLElBQUksa0JBQU8sQ0FBQyxlQUFlLEVBQUMscUNBQXFDLENBQUM7WUFDbEUsSUFBSSxrQkFBTyxDQUFDLHFCQUFxQixFQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0lBeEJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBQyxhQUFhO1lBQ3RCLFFBQVEsRUFBQyxrUEFPUjtZQUNELFNBQVMsRUFBQyxDQUFDLHFDQUFxQyxDQUFDO1NBQ2xELENBQUM7O3lCQUFBO0lBYUYsd0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHlCQUFpQixvQkFXN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3Byb2plY3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2plY3R9IGZyb20gJy4vcHJvamVjdHMvcHJvamVjdHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6J215LXByb2plY3RzJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2IGNsYXNzPVwiUHJvamVjdHNcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcHJvamVjdCBvZiBwcm9qZWN0c1wiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cIlByb2plY3RUaXRsZVwiPjxocj57e3Byb2plY3QudGl0bGV9fTwvaDQ+XHJcbiAgICAgICAgPGEgaHJlZj17e3Byb2plY3QudXJsfX0gdGFyZ2V0PVwiX2JsYW5rXCI+Q2hlY2sgSXQgT3V0ITwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczpbJy9zdHlsZXNoZWV0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHNDb21wb25lbnR7XHJcbiAgcHJvamVjdHMgPSBbXHJcbiAgICBuZXcgUHJvamVjdChcIlNpdGUtVi1TaXRlXCIsXCJodHRwOi8vc2l0ZS12LXNpdGUuaGVyb2t1YXBwLmNvbS9cIiksXHJcbiAgICBuZXcgUHJvamVjdChcIkRvbid0IEdldCBNZSBTdGFydGVkXCIsXCJodHRwczovL2RvbnRnZXRtZXN0YXJ0ZWQuaGVyb2t1YXBwLmNvbS9cIiksXHJcbiAgICBuZXcgUHJvamVjdChcIlJpZ2h0IG9yIFdyb25nIFF1aXpcIixcImh0dHBzOi8vcmlnaHRvcndyb25ncXVpei5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiSGFyZGVyIEhhbmdtYW5cIixcImh0dHBzOi8vaGFyZGVyLWhhbmdtYW4uaGVyb2t1YXBwLmNvbS9cIiksXHJcbiAgICBuZXcgUHJvamVjdChcIk5ZVCBTY3J1YmJlclwiLFwiaHR0cHM6Ly9ueXQtc2NydWJiZXIuaGVyb2t1YXBwLmNvbVwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiSm9sbHkgQ29vcGVyYXRpb25cIixcImpvbGx5LWNvb3BlcmF0aW9uLmhlcm9rdWFwcC5jb21cIiksXHJcbiAgICBuZXcgUHJvamVjdChcIlBsYXlsaXN0IG9mIFBvd2VyXCIsXCJodHRwczovL3BsYXlsaXN0b2Zwb3dlci5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiVGF2ZXJuIFR1c3NsZVwiLFwiaHR0cHM6Ly90YXZlcm50dXNzbGUuaGVyb2t1YXBwLmNvbS9cIiksXHJcbiAgICBuZXcgUHJvamVjdChcIllvdXIgR2lmIENvbGxlY3Rpb25cIixcImh0dHBzOi8vZ2lmY29sbGVjdGlvbi5oZXJva3VhcHAuY29tL1wiKV1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
