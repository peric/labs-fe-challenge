import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        WelcomeMessageComponent
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('welcome message should be defined', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-welcome-message')).toBeDefined();
  });
});
