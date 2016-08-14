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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMseUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFtQjVDO0lBQUE7UUFFRSxhQUFRLEdBQUc7WUFDVCxJQUFJLGtCQUFPLENBQUMsbUJBQW1CLEVBQUMsb0NBQW9DLEVBQUMsNkNBQTZDLENBQUM7WUFDbkgsSUFBSSxrQkFBTyxDQUFDLGFBQWEsRUFBQyxtQ0FBbUMsRUFBQyxvREFBb0QsQ0FBQztZQUNuSCxJQUFJLGtCQUFPLENBQUMsc0JBQXNCLEVBQUMseUNBQXlDLEVBQUMsRUFBRSxDQUFDO1lBQ2hGLElBQUksa0JBQU8sQ0FBQyxxQkFBcUIsRUFBQyx5Q0FBeUMsRUFBQyxFQUFFLENBQUM7WUFDL0UsSUFBSSxrQkFBTyxDQUFDLGdCQUFnQixFQUFDLHVDQUF1QyxFQUFDLEVBQUUsQ0FBQztZQUN4RSxJQUFJLGtCQUFPLENBQUMsY0FBYyxFQUFDLG9DQUFvQyxFQUFDLEVBQUUsQ0FBQztZQUNuRSxJQUFJLGtCQUFPLENBQUMsbUJBQW1CLEVBQUMseUNBQXlDLEVBQUMsRUFBRSxDQUFDO1lBQzdFLElBQUksa0JBQU8sQ0FBQyxtQkFBbUIsRUFBQyx3Q0FBd0MsRUFBQyxFQUFFLENBQUM7WUFDNUUsSUFBSSxrQkFBTyxDQUFDLGVBQWUsRUFBQyxxQ0FBcUMsRUFBQyxFQUFFLENBQUM7WUFDckUsSUFBSSxrQkFBTyxDQUFDLHFCQUFxQixFQUFDLHNDQUFzQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFakYsQ0FBQztJQS9CRDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUMsYUFBYTtZQUN0QixRQUFRLEVBQUMsOFlBV1I7WUFDRCxTQUFTLEVBQUMsQ0FBQyxxQ0FBcUMsQ0FBQztTQUNsRCxDQUFDOzt5QkFBQTtJQWdCRix3QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFkseUJBQWlCLG9CQWM3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cy9wcm9qZWN0cyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjonbXktcHJvamVjdHMnLFxyXG4gIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJQcm9qZWN0c1wiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwcm9qZWN0IG9mIHByb2plY3RzXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiUHJvamVjdFRpdGxlXCI+PGhyPnt7cHJvamVjdC50aXRsZX19PC9oND5cclxuICAgICAgICA8YSBocmVmPXt7cHJvamVjdC5saXZlVXJsfX0gdGFyZ2V0PVwiX2JsYW5rXCI+Q2hlY2sgSXQgT3V0ITwvYT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwicHJvamVjdC5naXRVcmwhPScnXCI+XHJcbiAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICA8YSBocmVmPXt7cHJvamVjdC5naXRVcmx9fSB0YXJnZXQ9XCJfYmxhbmtcIj5WaWV3IE9uIEdpdEh1YiE8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6Wycvc3R5bGVzaGVldHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50e1xyXG4gIFxyXG4gIHByb2plY3RzID0gW1xyXG4gICAgbmV3IFByb2plY3QoXCJUaGUgSG90Zml4IEVuZ2luZVwiLFwiaHR0cDovL2hvdGZpeGVuZ2luZS5oZXJva3VhcHAuY29tL1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL0phY29iRGVtaW5nL0hvdGZpeEVuZ2luZVwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiU2l0ZS1WLVNpdGVcIixcImh0dHA6Ly9zaXRlLXYtc2l0ZS5oZXJva3VhcHAuY29tL1wiLFwiaHR0cHM6Ly9naXRodWIuY29tL3dhbHRkYWtpbmQvc2l0ZV92ZXJzdXNfc2l0ZV9ycGdcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIkRvbid0IEdldCBNZSBTdGFydGVkXCIsXCJodHRwczovL2RvbnRnZXRtZXN0YXJ0ZWQuaGVyb2t1YXBwLmNvbS9cIixcIlwiKSxcclxuICAgIG5ldyBQcm9qZWN0KFwiUmlnaHQgb3IgV3JvbmcgUXVpelwiLFwiaHR0cHM6Ly9yaWdodG9yd3JvbmdxdWl6Lmhlcm9rdWFwcC5jb20vXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIkhhcmRlciBIYW5nbWFuXCIsXCJodHRwczovL2hhcmRlci1oYW5nbWFuLmhlcm9rdWFwcC5jb20vXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIk5ZVCBTY3J1YmJlclwiLFwiaHR0cHM6Ly9ueXQtc2NydWJiZXIuaGVyb2t1YXBwLmNvbVwiLFwiXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJKb2xseSBDb29wZXJhdGlvblwiLFwiaHR0cHM6Ly9qb2xseS1jb29wZXJhdGlvbi5oZXJva3VhcHAuY29tXCIsXCJcIiksXHJcbiAgICBuZXcgUHJvamVjdChcIlBsYXlsaXN0IG9mIFBvd2VyXCIsXCJodHRwczovL3BsYXlsaXN0b2Zwb3dlci5oZXJva3VhcHAuY29tL1wiLFwiXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJUYXZlcm4gVHVzc2xlXCIsXCJodHRwczovL3RhdmVybnR1c3NsZS5oZXJva3VhcHAuY29tL1wiLFwiXCIpLFxyXG4gICAgbmV3IFByb2plY3QoXCJZb3VyIEdpZiBDb2xsZWN0aW9uXCIsXCJodHRwczovL2dpZmNvbGxlY3Rpb24uaGVyb2t1YXBwLmNvbS9cIixcIlwiKV1cclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
