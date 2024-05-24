import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GestorLoginPage from '../../../pageObjects/GestorLoginPage';
import AppsmithLoginPage from '../../../pageObjects/AppsmithLoginPage';

// Before(() => {
//     AppsmithLoginPage.visit()
//     AppsmithLoginPage.fillEmailInput(Cypress.env('LOGIN_APPSMITH'));
//     AppsmithLoginPage.fillPasswordInput(Cypress.env('PASSWORD_APPSMITH'));
//     AppsmithLoginPage.submit();
// })

Given("Eu estou na página de login do Gestor BAC", () => {
    GestorLoginPage.visit();
    // GestorLoginPage.verifyUrl();
})

When("Eu insiro meu email e senha cadastrados", () => {
    GestorLoginPage.fillEmailInput(Cypress.env('LOGIN_GESTOR'));
    GestorLoginPage.fillPasswordInput(Cypress.env('PASSWORD_GESTOR'));
})

Then("Eu consigo logar com sucesso e vou para a página de Semoventes", () => {
    GestorLoginPage.submit();
})