import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AppsmithLoginPage from '../../../pageObjects/AppsmithLoginPage';


Given("Estou na Página de Login do Appsmith", () => {
    AppsmithLoginPage.visit();
})

When("Eu insiro meu email e senha cadastrados", () => {
    AppsmithLoginPage.fillEmailInput(Cypress.env('LOGIN_APPSMITH'));
    AppsmithLoginPage.fillPasswordInput(Cypress.env('PASSWORD_APPSMITH'));
    AppsmithLoginPage.submit();
})

Then("Eu consigo logar com sucesso e vou para a página de login do aplicativo", () => {
    AppsmithLoginPage.verifyLoginPage();
})