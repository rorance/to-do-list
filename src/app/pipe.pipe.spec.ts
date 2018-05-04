import { searchPipe } from './pipe.pipe';

describe('PipePipe', () => {
  it('create an instance', () => {
    const pipe = new searchPipe();
    expect(pipe).toBeTruthy();
  });
});
