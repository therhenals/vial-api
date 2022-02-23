import { FirebaseGuard } from './auth.guard';

describe('FirebaseGuard', () => {
  it('should be defined', () => {
    expect(new FirebaseGuard()).toBeDefined();
  });
});
