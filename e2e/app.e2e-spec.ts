import { InnovationBriefPage } from './app.po';

describe('innovation-brief App', () => {
  let page: InnovationBriefPage;

  beforeEach(() => {
    page = new InnovationBriefPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
