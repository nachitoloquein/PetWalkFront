import { TestBed } from '@angular/core/testing';

import { NoAuthConsumidorGuard } from './no-auth-consumidor.guard';

describe('NoAuthConsumidorGuard', () => {
  let guard: NoAuthConsumidorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAuthConsumidorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
