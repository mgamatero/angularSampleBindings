import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bindings';
  dualBind = 'ngModel2WayBind';

  yell(e){  //this is the yell($event) on the html
    console.log('I am yelling, click came from Child')
  }
}
