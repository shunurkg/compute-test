import { AppPage } from './app.po';
import{element,by,browser} from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to calculator!');
  });
   it('should have a title of compute test',()=>{
     browser.get('/');//to navigate to the home pg and view the title
     let title =element(by.tagName('h1')).getText();
     expect(title).toEqual('compute test');
   });
});
