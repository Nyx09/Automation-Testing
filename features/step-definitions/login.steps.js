import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


When(/^I login with {string} and {string} $/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(LoginPage.flashAlert).toBeExisting();
    await expect(LoginPage.flashAlert).toHaveText(expect.stringContaining(message));
});

