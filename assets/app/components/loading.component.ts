import {Component,OnInit} from "@angular/core";
import {HeaderComponent} from "./header.component";

@Component({
  selector: 'loading',
  template: `
    <h1 class="Loading">Telekinetic Criminal</h1>
    <h1 style="color:white">{{animationOver}}</h1>
    <div *ngIf="animationOver == true">
      <my-header></my-header>
    </div>
  `,
  directives:[HeaderComponent]
})

export class LoadingComponent implements OnInit{
  animationOver:boolean;
  counter:number;

  constructor(){
    this.counter=0;
    this.startCounter();
  }

  startCounter(){
    setTimeout(function(){
      this.animationOver=true;
      alert(this.animationOver);
    },5000);
  }
}