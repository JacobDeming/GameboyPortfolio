import {Component} from "@angular/core";

@Component({
  selector:'my-profile',
  template:`
  <div class="Profile">
    <p class="ProfileText">
    Ever since I was five years-old and received my first gaming console - an old monochrome Game Boy - I have been hooked on video games and their innate ability to immerse audiences in worlds separate from our own. Unlike my friends who simply enjoyed playing games as a means to unwind and pass the time, however, I found myself growing more and more interested in the actual study of video games and those techniques by which developers create digital playgrounds.
    <br><br>
    While the interactive nature of games and the puzzling complexity of their design were those elements that originally drew me into the field of Media Studies, I soon found myself following the path of an independent developer after graduation and found a deep-rooted desire to develop my own coding skills with the ultimate objective of joining in the design process fully. It is for this reason that I have entered into Rutgers' Coding Boot Camp and taken my first steps towards becoming a proficient coder, designer, and developer.
    </p>
  </div>
  `,
  styleUrls:['app/styles/profile.component.css']
})

export class ProfileComponent {}