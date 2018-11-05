import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavComponent
      ],
      imports: [
        RouterTestingModule,
        RouterModule,
        MatTabsModule,
        MatIconModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  });

  it('navigation items should be shown', () => {
    fixture.detectChanges();
    expect(component.navItems.length).toEqual(2);
    expect(fixture.nativeElement.querySelectorAll('.mat-tab-link').length).toEqual(2);
  });
});
