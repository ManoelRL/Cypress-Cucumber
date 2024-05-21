import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import AppsmithLoginPage from '../../../pageObjects/AppsmithLoginPage';
import dotenv from 'dotenv'

dotenv.config()

Given("Estou na Página de Login do Appsmith", () => {
    AppsmithLoginPage.visit();
})

When("Eu insiro meu email e senha cadastrados", () => {
    AppsmithLoginPage.fillEmailInput(`${process.env.LOGIN_APPSMITH}`);
    AppsmithLoginPage.fillPasswordInput(process.env.PASSOWORD_APPSMITH);
    AppsmithLoginPage.submit();
})

Then("Eu consigo logar com sucesso e vou para a página de login do aplicativo", () => {
    AppsmithLoginPage.verifyLoginPage();
})