import {Component,OnInit} from "@angular/core";
import {HeaderComponent} from "./header.component";

@Component({
  selector: 'loading',
  template: `
    <h1 class="Loading">Telekinetic Criminal</h1>
  `,
  directives:[HeaderComponent]
})

export class LoadingComponent implements OnInit{

  constructor(){
  }
}