import { getYear } from './app.component';

describe('AppComponent', () => {

  it('add by 1', () => {
    expect(getYear(19)).toBe(1999);
  });

});