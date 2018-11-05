import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { WelcomeMessageComponent } from './welcome-message.component';
import { SharedModule } from '../../shared/shared.module';

describe('WelcomeMessageComponent', () => {
  let component: WelcomeMessageComponent;
  let fixture: ComponentFixture<WelcomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeMessageComponent
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageComponent);
    component = fixture.componentInstance;
  });

  it('welcome message should be shown', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.welcome-text').innerText).toEqual('Hello, my name is Dražen!');
  });

  it('color should change every second', fakeAsync(() => {
    expect(component.currentColor).toBeUndefined();
    fixture.detectChanges();
    expect(component.currentColor).toEqual('#000000');
    tick(1000);
    expect(component.currentColor).toEqual('#E27D60');
    tick(1000);
    expect(component.currentColor).toEqual('#85DCBA');
    tick(1000);
    expect(component.currentColor).toEqual('#E8A87C');
    tick(1000);
    expect(component.currentColor).toEqual('#3F51B5');
    discardPeriodicTasks();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.welcome-text').style.color).toEqual('rgb(63, 81, 181)');
  }));
});
