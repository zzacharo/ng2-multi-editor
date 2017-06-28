import { Ng2MultiEditorPage } from './app.po';

describe('ng2-multi-editor App', () => {
  let page: Ng2MultiEditorPage;

  beforeEach(() => {
    page = new Ng2MultiEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
