import { TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'online-compiler'`, () => {
  //   const fixture = TestBed.createComponent(MainComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('online-compiler');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'online-compiler app is running!'
    );
  });
});
