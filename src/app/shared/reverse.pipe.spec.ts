import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return correct string of olleh', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
