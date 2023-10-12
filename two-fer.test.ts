import 'jest';
import { twoFer } from './two-fer';

describe('twoFer()', () => {
  it('no name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  it.skip('a name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  it.skip('another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});