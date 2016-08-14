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
            new projects_1.Project("The Hotfix Engine", "http://hotfixengine.herokuapp.com/", "https://github.com/JacobDeming/HotfixEngine"),
            new projects_1.Project("Site-V-Site", "http://site-v-site.herokuapp.com/", "https://github.com/waltdakind/site_versus_site_rpg"),
            new projects_1.Project("Don't Get Me Started", "https://dontgetmestarted.herokuapp.com/", ""),
            new projects_1.Project("Right or Wrong Quiz", "https://rightorwrongquiz.herokuapp.com/", ""),
            new projects_1.Project("Harder Hangman", "https://harder-hangman.herokuapp.com/", ""),
            new projects_1.Project("NYT Scrubber", "https://nyt-scrubber.herokuapp.com", ""),
            new projects_1.Project("Jolly Cooperation", "https://jolly-cooperation.herokuapp.com", ""),
            new projects_1.Project("Playlist of Power", "https://playlistofpower.herokuapp.com/", ""),
            new projects_1.Project("Tavern Tussle", "https://taverntussle.herokuapp.com/", ""),
            new projects_1.Project("Your Gif Collection", "https://gifcollection.herokuapp.com/", "")];
    }
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'my-projects',
            template: "\n    <div class=\"Projects\">\n      <div *ngFor=\"let project of projects\">\n        <h4 class=\"ProjectTitle\"><hr>{{project.title}}</h4>\n        <a href={{project.liveUrl}} target=\"_blank\">Check It Out!</a>\n        <div *ngIf=\"project.gitUrl!=''\">\n          <br>\n          <a href={{project.gitUrl}} target=\"_blank\">View On GitHub!</a>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['/stylesheets/projects.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFtQjVDO0lBQUE7UUFFRSxhQUFRLEdBQUc7WUFDVCxJQUFJLGtCQUFPLENBQUMsbUJBQW1CLEVBQUMsb0NBQW9DLEVBQUMsNkNBQTZDLENBQUM7WUFDbkgsSUFBSSxrQkFBTyxDQUFDLGFBQWEsRUFBQyxtQ0FBbUMsRUFBQyxvREFBb0QsQ0FBQztZQUNuSCxJQUFJLGtCQUFPLENBQUMsc0JBQXNCLEVBQUMseUNBQXlDLEVBQUMsRUFBRSxDQUFDO1lBQ2hGLElBQUksa0JBQU8sQ0FBQyxxQkFBcUIsRUFBQyx5Q0FBeUMsRUFBQyxFQUFFLENBQUM7WUFDL0UsSUFBSSxrQkFBTyxDQUFDLGdCQUFnQixFQUFDLHVDQUF1QyxFQUFDLEVBQUUsQ0FBQztZQUN4RSxJQUFJLGtCQUFPLENBQUMsY0FBYyxFQUFDLG9DQUFvQyxFQUFDLEVBQUUsQ0FBQztZQUNuRSxJQUFJLGtCQUFPLENBQUMsbUJBQW1CLEVBQUMseUNBQXlDLEVBQUMsRUFBRSxDQUFDO1lBQzdFLElBQUksa0JBQU8sQ0FBQyxtQkFBbUIsRUFBQyx3Q0FBd0MsRUFBQyxFQUFFLENBQUM7WUFDNUUsSUFBSSxrQkFBTyxDQUFDLGVBQWUsRUFBQyxxQ0FBcUMsRUFBQyxFQUFFLENBQUM7WUFDckUsSUFBSSxrQkFBTyxDQUFDLHFCQUFxQixFQUFDLHNDQUFzQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQztJQTlCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUMsYUFBYTtZQUN0QixRQUFRLEVBQUMsOFlBV1I7WUFDRCxTQUFTLEVBQUMsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNsRCxDQUFDOzt5QkFBQTtJQWVGLHdCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx5QkFBaUIsb0JBYTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9qZWN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RzL3Byb2plY3RzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOidteS1wcm9qZWN0cycsXHJcbiAgdGVtcGxhdGU6YFxyXG4gICAgPGRpdiBjbGFzcz1cIlByb2plY3RzXCI+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHByb2plY3Qgb2YgcHJvamVjdHNcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJQcm9qZWN0VGl0bGVcIj48aHI+e3twcm9qZWN0LnRpdGxlfX08L2g0PlxyXG4gICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LmxpdmVVcmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5DaGVjayBJdCBPdXQhPC9hPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJwcm9qZWN0LmdpdFVybCE9JydcIj5cclxuICAgICAgICAgIDxicj5cclxuICAgICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LmdpdFVybH19IHRhcmdldD1cIl9ibGFua1wiPlZpZXcgT24gR2l0SHViITwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlVXJsczpbJy9zdHlsZXNoZWV0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHNDb21wb25lbnR7XHJcbiAgXHJcbiAgcHJvamVjdHMgPSBbXHJcbiAgICBuZXcgUHJvamVjdChcIlRoZSBIb3RmaXggRW5naW5lXCIsXCJodHRwOi8vaG90Zml4ZW5naW5lLmhlcm9rdWFwcC5jb20vXCIsXCJodHRwczovL2dpdGh1Yi5jb20vSmFjb2JEZW1pbmcvSG90Zml4RW5naW5lXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJTaXRlLVYtU2l0ZVwiLFwiaHR0cDovL3NpdGUtdi1zaXRlLmhlcm9rdWFwcC5jb20vXCIsXCJodHRwczovL2dpdGh1Yi5jb20vd2FsdGRha2luZC9zaXRlX3ZlcnN1c19zaXRlX3JwZ1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiRG9uJ3QgR2V0IE1lIFN0YXJ0ZWRcIixcImh0dHBzOi8vZG9udGdldG1lc3RhcnRlZC5oZXJva3VhcHAuY29tL1wiLFwiXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJSaWdodCBvciBXcm9uZyBRdWl6XCIsXCJodHRwczovL3JpZ2h0b3J3cm9uZ3F1aXouaGVyb2t1YXBwLmNvbS9cIixcIlwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiSGFyZGVyIEhhbmdtYW5cIixcImh0dHBzOi8vaGFyZGVyLWhhbmdtYW4uaGVyb2t1YXBwLmNvbS9cIixcIlwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiTllUIFNjcnViYmVyXCIsXCJodHRwczovL255dC1zY3J1YmJlci5oZXJva3VhcHAuY29tXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIkpvbGx5IENvb3BlcmF0aW9uXCIsXCJodHRwczovL2pvbGx5LWNvb3BlcmF0aW9uLmhlcm9rdWFwcC5jb21cIixcIlwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiUGxheWxpc3Qgb2YgUG93ZXJcIixcImh0dHBzOi8vcGxheWxpc3RvZnBvd2VyLmhlcm9rdWFwcC5jb20vXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIlRhdmVybiBUdXNzbGVcIixcImh0dHBzOi8vdGF2ZXJudHVzc2xlLmhlcm9rdWFwcC5jb20vXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIllvdXIgR2lmIENvbGxlY3Rpb25cIixcImh0dHBzOi8vZ2lmY29sbGVjdGlvbi5oZXJva3VhcHAuY29tL1wiLFwiXCIpXVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
