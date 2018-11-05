import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { LoaderState } from './loader';

describe('LoaderService', () => {
  let loaderService: LoaderService;

  beforeEach(() => TestBed.configureTestingModule({ providers: [LoaderService] }));

  it('should be shown', () => {
    loaderService = TestBed.get(LoaderService);

    loaderService.loaderState.subscribe((state: LoaderState) => {
      expect(state.show).toBeTruthy();
    });

    loaderService.show();
  });

  it('should be hidden', () => {
    loaderService = TestBed.get(LoaderService);

    loaderService.loaderState.subscribe((state: LoaderState) => {
      expect(state.show).toBeFalsy();
    });

    loaderService.hide();
  });
});
