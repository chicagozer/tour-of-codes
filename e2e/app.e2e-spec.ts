import { TourOfCodesPage } from './app.po';

describe('tour-of-codes App', function() {
  let page: TourOfCodesPage;

  beforeEach(() => {
    page = new TourOfCodesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
