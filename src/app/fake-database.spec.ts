import { FakeDatabase } from './fake-database';

describe('FakeDatabase', () => {
  it('should create an instance', () => {
    expect(new FakeDatabase()).toBeTruthy();
  });
});
