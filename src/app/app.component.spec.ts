import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


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

it('should calculate', ()=>{
  expect(this.objCompute.total).toBe(3);
});
});




