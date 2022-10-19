import { TestBed } from '@angular/core/testing';

import { AuthConsumidorGuard } from './auth-consumidor.guard';

describe('AuthConsumidorGuard', () => {
  let guard: AuthConsumidorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthConsumidorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
