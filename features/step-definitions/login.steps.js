import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect} from 'chai';
import loginPage from '../pageobjects/login.page.js'

When(/^I login with (.*) and (.*) #login$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*) #login$/, async (message) => {
    loginPage.flashMessage(message);
});






