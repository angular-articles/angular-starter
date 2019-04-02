import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/login') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .auth-form__title')).getText() as Promise<string>;
  }
}
