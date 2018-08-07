import { Component,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//tried yes
// @Component({
//     selector:'child',
//     template:`<button (click)="sayHello()">Greet</button>`
// })
// export class Child{
//     @Output() greeting = new EventEmitter();
//     sayHello(){
//         this.greeting.emit({greeting:'hello'});
//     }
// }

// @Component({
//     selector:'parent',
//     template:`<child (greeting)="onGreeting($event)"></child>`
// })
// export class Parent{
//     onGreeting(e){
//         console.log(e);
//     }
// }

export class AppComponent {
  title = 'compute test';

courses=[1,2];
  FibonnaciSeries(number) {
    var first = 0;
    var second = 1;
    var resultant;
    var series = "0,1";
    if (number == 1)
      series = "0";
    else if (number == 2) {
    }
    else {
      for (var i = 0; i < number - 2; i++) {
        resultant = first + second;
        first = second;
        second = resultant;
        series.concat("," + resultant);
      }
    } console.log(series);
    return series;
  }

  LCM(n1, n2) {
    var lcm;
    lcm = (n1 > n2) ? n1 : n2;
    while (true) {
      if (lcm % n1 == 0 && lcm % n2 == 0) {
        
        break;
      }
      ++lcm;
    } return lcm;
  }
}
