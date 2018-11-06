import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('transforms "awesome text" to "Awesome text"', () => {
    expect(pipe.transform('awesome text')).toBe('Awesome text');
  });

  it('transforms "" to ""', () => {
    expect(pipe.transform('')).toBe('');
  });
});
