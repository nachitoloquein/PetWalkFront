import { TestBed } from '@angular/core/testing';

import { AuthTrabajadorGuard } from './auth-trabajador.guard';

describe('AuthTrabajadorGuard', () => {
  let guard: AuthTrabajadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTrabajadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
