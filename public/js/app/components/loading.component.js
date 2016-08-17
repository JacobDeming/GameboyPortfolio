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
var header_component_1 = require("./header.component");
var LoadingComponent = (function () {
    function LoadingComponent() {
        this.counter = 0;
        this.startCounter();
    }
    LoadingComponent.prototype.startCounter = function () {
        setTimeout(function () {
            this.animationOver = true;
            alert(this.animationOver);
        }, 5000);
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'loading',
            template: "\n    <h1 class=\"Loading\">Telekinetic Criminal</h1>\n    <h1 style=\"color:white\">{{animationOver}}</h1>\n    <div *ngIf=\"animationOver == true\">\n      <my-header></my-header>\n    </div>\n  ",
            directives: [header_component_1.HeaderComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQWNuRDtJQUlFO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVDQUFZLEdBQVo7UUFDRSxVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQztZQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNWLENBQUM7SUExQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHVNQU1UO1lBQ0QsVUFBVSxFQUFDLENBQUMsa0NBQWUsQ0FBQztTQUM3QixDQUFDOzt3QkFBQTtJQWlCRix1QkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksd0JBQWdCLG1CQWU1QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvYWRpbmcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDEgY2xhc3M9XCJMb2FkaW5nXCI+VGVsZWtpbmV0aWMgQ3JpbWluYWw8L2gxPlxyXG4gICAgPGgxIHN0eWxlPVwiY29sb3I6d2hpdGVcIj57e2FuaW1hdGlvbk92ZXJ9fTwvaDE+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiYW5pbWF0aW9uT3ZlciA9PSB0cnVlXCI+XHJcbiAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGRpcmVjdGl2ZXM6W0hlYWRlckNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIGFuaW1hdGlvbk92ZXI6Ym9vbGVhbjtcclxuICBjb3VudGVyOm51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuY291bnRlcj0wO1xyXG4gICAgdGhpcy5zdGFydENvdW50ZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0Q291bnRlcigpe1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbk92ZXI9dHJ1ZTtcclxuICAgICAgYWxlcnQodGhpcy5hbmltYXRpb25PdmVyKTtcclxuICAgIH0sNTAwMCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
