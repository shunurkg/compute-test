import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
//import {describe,expect,it} from 'angular2/testing';
//import {Child} from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'compute test'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('compute test');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('compute test');
  }));
  beforeEach(() => { 
    this.objCompute = new AppComponent();
   });
// afterEach(() => { 
//     this.objCaculator=null;
//     this.firstNumber=0;
//     this.secondNumber=0;
//     this.result=0;
// });
it('check fibonacci series', () => {
  var result=this.objCompute.FibonnaciSeries(5);
  console.log(result);
  expect(result).toString();
});
// it('check fibonacci series', () => {
//   var result=this.objCompute.FibonnaciSeries(5);
//   console.log(result);
//   expect(result).toString();
// });


it('should find the lcm and check if its greater to any given number', () => {
  var result=this.objCompute.LCM(72,120);
  console.log(result);
  expect(result).toBeGreaterThan(72);
});
it('should check if the lcm is greater than or equal to the largest number', () => {
  var result=this.objCompute.LCM(2,4);
  console.log(result);
  expect(result).toBeGreaterThanOrEqual(4);
});
});
//tried yes
// export function main() {
//   describe('Greeting Component', () => {
//       it('should emit greeting event', (done) => {
//           let child = new Child();
//           child.greeting.subscribe(g => {
//              expect(g).toEqual({greeting:'hello'});
//              done();
//           });
//           child.sayHello();
//       });
//   });
// }

