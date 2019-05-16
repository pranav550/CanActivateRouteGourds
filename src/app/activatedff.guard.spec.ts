import { TestBed, async, inject } from '@angular/core/testing';

import { ActivatedffGuard } from './activatedff.guard';

describe('ActivatedffGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedffGuard]
    });
  });

  it('should ...', inject([ActivatedffGuard], (guard: ActivatedffGuard) => {
    expect(guard).toBeTruthy();
  }));
});
