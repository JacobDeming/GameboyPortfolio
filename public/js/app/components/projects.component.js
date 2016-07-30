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
            new projects_1.Project("The Hotfix Engine", "http://hotfixengine.herokuapp.com/"),
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFlNUM7SUFBQTtRQUNFLGFBQVEsR0FBRztZQUNULElBQUksa0JBQU8sQ0FBQyxtQkFBbUIsRUFBQyxvQ0FBb0MsQ0FBQztZQUNyRSxJQUFJLGtCQUFPLENBQUMsYUFBYSxFQUFDLG1DQUFtQyxDQUFDO1lBQzlELElBQUksa0JBQU8sQ0FBQyxzQkFBc0IsRUFBQyx5Q0FBeUMsQ0FBQztZQUM3RSxJQUFJLGtCQUFPLENBQUMscUJBQXFCLEVBQUMseUNBQXlDLENBQUM7WUFDNUUsSUFBSSxrQkFBTyxDQUFDLGdCQUFnQixFQUFDLHVDQUF1QyxDQUFDO1lBQ3JFLElBQUksa0JBQU8sQ0FBQyxjQUFjLEVBQUMsb0NBQW9DLENBQUM7WUFDaEUsSUFBSSxrQkFBTyxDQUFDLG1CQUFtQixFQUFDLGlDQUFpQyxDQUFDO1lBQ2xFLElBQUksa0JBQU8sQ0FBQyxtQkFBbUIsRUFBQyx3Q0FBd0MsQ0FBQztZQUN6RSxJQUFJLGtCQUFPLENBQUMsZUFBZSxFQUFDLHFDQUFxQyxDQUFDO1lBQ2xFLElBQUksa0JBQU8sQ0FBQyxxQkFBcUIsRUFBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUE7SUFDOUUsQ0FBQztJQXpCRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUMsYUFBYTtZQUN0QixRQUFRLEVBQUMsa1BBT1I7WUFDRCxTQUFTLEVBQUMsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNsRCxDQUFDOzt5QkFBQTtJQWNGLHdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSx5QkFBaUIsb0JBWTdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9qZWN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0fSBmcm9tICcuL3Byb2plY3RzL3Byb2plY3RzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOidteS1wcm9qZWN0cycsXHJcbiAgdGVtcGxhdGU6YFxyXG4gICAgPGRpdiBjbGFzcz1cIlByb2plY3RzXCI+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHByb2plY3Qgb2YgcHJvamVjdHNcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJQcm9qZWN0VGl0bGVcIj48aHI+e3twcm9qZWN0LnRpdGxlfX08L2g0PlxyXG4gICAgICAgIDxhIGhyZWY9e3twcm9qZWN0LnVybH19IHRhcmdldD1cIl9ibGFua1wiPkNoZWNrIEl0IE91dCE8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6Wycvc3R5bGVzaGVldHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50e1xyXG4gIHByb2plY3RzID0gW1xyXG4gICAgbmV3IFByb2plY3QoXCJUaGUgSG90Zml4IEVuZ2luZVwiLFwiaHR0cDovL2hvdGZpeGVuZ2luZS5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiU2l0ZS1WLVNpdGVcIixcImh0dHA6Ly9zaXRlLXYtc2l0ZS5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiRG9uJ3QgR2V0IE1lIFN0YXJ0ZWRcIixcImh0dHBzOi8vZG9udGdldG1lc3RhcnRlZC5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiUmlnaHQgb3IgV3JvbmcgUXVpelwiLFwiaHR0cHM6Ly9yaWdodG9yd3JvbmdxdWl6Lmhlcm9rdWFwcC5jb20vXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJIYXJkZXIgSGFuZ21hblwiLFwiaHR0cHM6Ly9oYXJkZXItaGFuZ21hbi5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiTllUIFNjcnViYmVyXCIsXCJodHRwczovL255dC1zY3J1YmJlci5oZXJva3VhcHAuY29tXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJKb2xseSBDb29wZXJhdGlvblwiLFwiam9sbHktY29vcGVyYXRpb24uaGVyb2t1YXBwLmNvbVwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiUGxheWxpc3Qgb2YgUG93ZXJcIixcImh0dHBzOi8vcGxheWxpc3RvZnBvd2VyLmhlcm9rdWFwcC5jb20vXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJUYXZlcm4gVHVzc2xlXCIsXCJodHRwczovL3RhdmVybnR1c3NsZS5oZXJva3VhcHAuY29tL1wiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiWW91ciBHaWYgQ29sbGVjdGlvblwiLFwiaHR0cHM6Ly9naWZjb2xsZWN0aW9uLmhlcm9rdWFwcC5jb20vXCIpXVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
