import { install } from './index';

describe('ae-toolbar', () => {
  it('provides an install function', () => {
    expect(typeof install).toBe('function');
  });
});
