import { AngularFormValidationScotchPage } from './app.po';

describe('angular-form-validation-scotch App', function() {
  let page: AngularFormValidationScotchPage;

  beforeEach(() => {
    page = new AngularFormValidationScotchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
