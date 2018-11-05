import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { LoaderService } from './loader.service';
import { Observable, Subject } from 'rxjs';
import { LoaderState } from './loader';
import { MatProgressBarModule } from '@angular/material';

export class LoaderServiceMock {
  private loaderSubject = new Subject<LoaderState>();

  public loaderState: Observable<LoaderState> = this.loaderSubject.asObservable();
}

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoaderComponent
      ],
      imports: [
        MatProgressBarModule,
      ],
      providers: [
        { provide: LoaderService, useClass: LoaderServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
  });

  it('should not be active by default', () => {
    fixture.detectChanges();
    expect(component.show).toBeFalsy();
    expect(fixture.nativeElement.querySelector('mat-progress-bar').getAttribute('mode')).toEqual('determinate');
  });

  it('should change mode when active', () => {
    fixture.detectChanges();
    component.show = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-progress-bar').getAttribute('mode')).toEqual('query');
  });
});
