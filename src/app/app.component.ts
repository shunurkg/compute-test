import { Component,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'compute test';
  courses=[1,2];
  total:number;
  items=[
    { name:'item1',price:1},
    { name:'item2',price:2}
  ];

  constructor(){
    this.calculate();
  }

  calculate(){
    this.total=this.items.reduce((sum,item)=> sum+ this.items["price"] ,0)
  }
   
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
