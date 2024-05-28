import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GestorLoginPage from '../../../pageObjects/GestorLoginPage';

Given("Eu estou na página de login do Gestor BAC", () => {
    GestorLoginPage.visit();
})

When("Eu insiro um email ou senha inválidos", () => {
    GestorLoginPage.fillEmailInput('abacaxi@email.com');
    GestorLoginPage.fillPasswordInput('2341245');
})

When("Eu insiro meu email e senha cadastrados", () => {
    GestorLoginPage.fillEmailInput(Cypress.env('LOGIN_GESTOR'));
    GestorLoginPage.fillPasswordInput(Cypress.env('PASSWORD_GESTOR'));
})

Then("Eu consigo logar com sucesso e vou para a página de Semoventes", () => {
    GestorLoginPage.submit();
    GestorLoginPage.verifySemoventesPage();
})

Then("Uma mensagem de erro é exibida em tela", () => {
    GestorLoginPage.submit();
    GestorLoginPage.shouldShowErrorMessage();
})
