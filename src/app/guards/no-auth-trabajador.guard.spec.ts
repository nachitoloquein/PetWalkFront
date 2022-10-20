import { TestBed } from '@angular/core/testing';

import { NoAuthTrabajadorGuard } from './no-auth-trabajador.guard';

describe('NoAuthTrabajadorGuard', () => {
  let guard: NoAuthTrabajadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAuthTrabajadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
