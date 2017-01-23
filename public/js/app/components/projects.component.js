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
            new projects_1.Project("Generation IV RPG (In Development)", "2D-Platformer and RPG with a superhero theme made using C# and the Unity2D engine", "https://www.youtube.com/playlist?list=PLpg4AKk1HGCWSZSDYC69--WddOpiVZmc1", ""),
            new projects_1.Project("The Hotfix Engine", "A JavaScript/HTML/Angular2 game engine which allows players to manipulate game data", "http://hotfixengine.herokuapp.com/", "https://github.com/JacobDeming/HotfixEngine"),
            new projects_1.Project("Site-V-Site", "A turn based RPG where character stats are culled from real web site analytics data from the AWIS API", "http://site-v-site.herokuapp.com/", "https://github.com/waltdakind/site_versus_site_rpg"),
            new projects_1.Project("Don't Get Me Started", "Cards Against Humanity like game where players are given topics and must craft rants about them", "https://dontgetmestarted.herokuapp.com/", ""),
            new projects_1.Project("Tavern Tussle", "Puzzle game where you pick a traditional RPG character and must overcome three others by gaining power", "https://taverntussle.herokuapp.com/", "")];
    }
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'my-projects',
            template: "\n    <div class=\"Projects\">\n      <div *ngFor=\"let project of projects\">\n        <h4 class=\"ProjectTitle\"><hr>{{project.title}}</h4>\n        <p class=\"ProjectDesc\">{{project.description}}</p>\n        <a href={{project.liveUrl}} target=\"_blank\">Check It Out!</a>\n        <div *ngIf=\"project.gitUrl!=''\">\n          <br>\n          <a href={{project.gitUrl}} target=\"_blank\">View On GitHub!</a>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['/stylesheets/projects.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFvQjVDO0lBQUE7UUFFRSxhQUFRLEdBQUc7WUFDVCxJQUFJLGtCQUFPLENBQUMsb0NBQW9DLEVBQUMsbUZBQW1GLEVBQUMsMEVBQTBFLEVBQUMsRUFBRSxDQUFDO1lBQ25OLElBQUksa0JBQU8sQ0FBQyxtQkFBbUIsRUFBQyxxRkFBcUYsRUFBQyxvQ0FBb0MsRUFBQyw2Q0FBNkMsQ0FBQztZQUN6TSxJQUFJLGtCQUFPLENBQUMsYUFBYSxFQUFDLHVHQUF1RyxFQUFDLG1DQUFtQyxFQUFDLG9EQUFvRCxDQUFDO1lBQzNOLElBQUksa0JBQU8sQ0FBQyxzQkFBc0IsRUFBQyxpR0FBaUcsRUFBQyx5Q0FBeUMsRUFBQyxFQUFFLENBQUM7WUFDbEwsSUFBSSxrQkFBTyxDQUFDLGVBQWUsRUFBQyx3R0FBd0csRUFBQyxxQ0FBcUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25MLENBQUM7SUExQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFDLGFBQWE7WUFDdEIsUUFBUSxFQUFDLDRjQVlSO1lBQ0QsU0FBUyxFQUFDLENBQUMscUNBQXFDLENBQUM7U0FDbEQsQ0FBQzs7eUJBQUE7SUFVRix3QkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlkseUJBQWlCLG9CQVE3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cy9wcm9qZWN0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonbXktcHJvamVjdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJQcm9qZWN0c1wiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9qZWN0IG9mIHByb2plY3RzXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiUHJvamVjdFRpdGxlXCI+PGhyPnt7cHJvamVjdC50aXRsZX19PC9oND5cclxuICAgICAgICA8cCBjbGFzcz1cIlByb2plY3REZXNjXCI+e3twcm9qZWN0LmRlc2NyaXB0aW9ufX08L3A+XHJcbiAgICAgICAgPGEgaHJlZj17e3Byb2plY3QubGl2ZVVybH19IHRhcmdldD1cIl9ibGFua1wiPkNoZWNrIEl0IE91dCE8L2E+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInByb2plY3QuZ2l0VXJsIT0nJ1wiPlxyXG4gICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgPGEgaHJlZj17e3Byb2plY3QuZ2l0VXJsfX0gdGFyZ2V0PVwiX2JsYW5rXCI+VmlldyBPbiBHaXRIdWIhPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOlsnL3N0eWxlc2hlZXRzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0NvbXBvbmVudHtcclxuICBcclxuICBwcm9qZWN0cyA9IFtcclxuICAgIG5ldyBQcm9qZWN0KFwiR2VuZXJhdGlvbiBJViBSUEcgKEluIERldmVsb3BtZW50KVwiLFwiMkQtUGxhdGZvcm1lciBhbmQgUlBHIHdpdGggYSBzdXBlcmhlcm8gdGhlbWUgbWFkZSB1c2luZyBDIyBhbmQgdGhlIFVuaXR5MkQgZW5naW5lXCIsXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMcGc0QUtrMUhHQ1dTWlNEWUM2OS0tV2RkT3BpVlptYzFcIixcIlwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiVGhlIEhvdGZpeCBFbmdpbmVcIixcIkEgSmF2YVNjcmlwdC9IVE1ML0FuZ3VsYXIyIGdhbWUgZW5naW5lIHdoaWNoIGFsbG93cyBwbGF5ZXJzIHRvIG1hbmlwdWxhdGUgZ2FtZSBkYXRhXCIsXCJodHRwOi8vaG90Zml4ZW5naW5lLmhlcm9rdWFwcC5jb20vXCIsXCJodHRwczovL2dpdGh1Yi5jb20vSmFjb2JEZW1pbmcvSG90Zml4RW5naW5lXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJTaXRlLVYtU2l0ZVwiLFwiQSB0dXJuIGJhc2VkIFJQRyB3aGVyZSBjaGFyYWN0ZXIgc3RhdHMgYXJlIGN1bGxlZCBmcm9tIHJlYWwgd2ViIHNpdGUgYW5hbHl0aWNzIGRhdGEgZnJvbSB0aGUgQVdJUyBBUElcIixcImh0dHA6Ly9zaXRlLXYtc2l0ZS5oZXJva3VhcHAuY29tL1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL3dhbHRkYWtpbmQvc2l0ZV92ZXJzdXNfc2l0ZV9ycGdcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIkRvbid0IEdldCBNZSBTdGFydGVkXCIsXCJDYXJkcyBBZ2FpbnN0IEh1bWFuaXR5IGxpa2UgZ2FtZSB3aGVyZSBwbGF5ZXJzIGFyZSBnaXZlbiB0b3BpY3MgYW5kIG11c3QgY3JhZnQgcmFudHMgYWJvdXQgdGhlbVwiLFwiaHR0cHM6Ly9kb250Z2V0bWVzdGFydGVkLmhlcm9rdWFwcC5jb20vXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIlRhdmVybiBUdXNzbGVcIixcIlB1enpsZSBnYW1lIHdoZXJlIHlvdSBwaWNrIGEgdHJhZGl0aW9uYWwgUlBHIGNoYXJhY3RlciBhbmQgbXVzdCBvdmVyY29tZSB0aHJlZSBvdGhlcnMgYnkgZ2FpbmluZyBwb3dlclwiLFwiaHR0cHM6Ly90YXZlcm50dXNzbGUuaGVyb2t1YXBwLmNvbS9cIixcIlwiKV1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
