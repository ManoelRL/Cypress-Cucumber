import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GestorVacinaPage from '../../../pageObjects/GestorColeiraPage';

//Escrever um After para o login via API utilizando o método 'session' do Cypress.

Given("Estou na página de Coleiras do Gestor BAC", () => {
    GestorVacinaPage.visit();
})

When("Eu clico no botão de adicionar a coleira", () => {
    GestorVacinaPage.clickAddColeiraBtn();
})

And("Eu preencho o {string} e a {string} da coleira", (nome, duracao) => {
    GestorVacinaPage.fillNomeColeira(nome);
    GestorVacinaPage.fillDuracaoColeira(duracao);
})

Then("Eu consigo cadastrar a coleira e visualiza-la na tabela", () => {

})