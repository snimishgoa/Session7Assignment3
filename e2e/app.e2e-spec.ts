import { Session7Assignment3Page } from './app.po';

describe('session7-assignment3 App', () => {
  let page: Session7Assignment3Page;

  beforeEach(() => {
    page = new Session7Assignment3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
