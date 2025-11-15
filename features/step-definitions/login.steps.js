import { Then } from '@wdio/cucumber-framework';

Then(/^I enter login email$/, async function() {
    console.log("Step - I enter login email")
})

Then(/^I enter login password$/, async function() {
    console.log("Step - I enter login password")
})

Then(/^I confirm login$/, async function() {
    console.log("Step - I confirm login")
})

Then(/^I am logged in$/, async function() {
    console.log("Step - I am logged in")
})

Then(/^I have logged in$/, async function() {
    console.log("Step - I have logged in")
})
