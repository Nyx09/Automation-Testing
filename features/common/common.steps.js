import { Given, When, Then } from '@wdio/cucumber-framework';
import { pages } from './common.page.js';

Given(/^I am on the '(.*)' page$/, async (page) => {
    await pages.page(page); 
});



