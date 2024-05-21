import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AppsmithLoginPage from '../../../pageObjects/AppsmithLoginPage'

Given("Estou na Página de Login do Appsmith", () => {
    AppsmithLoginPage.visit();
})

When('Eu insiro meu email e senha cadastrados', () => {
    AppsmithLoginPage.fillEmailInput('bac.smart.idea@gmail.com');
    AppsmithLoginPage.fillPasswordInput('Leds@bac.22');
})