import xpath from 'cypress-xpath';

const URL = Cypress.env('URL_BASE') + 'app/appsmithgestor-20-05/coleiras-664b8ff03d0ee46738b29b3b?branch=main';
const elements = {
    addColeiraBtn : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div/button'),
    nomeColeiraInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div[3]/div/div/div/div[2]/div/span/span/div/input'),
    duracaoColeiraInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div[2]/div/div/div/div/div/div[2]/div/div/div/div/div[4]/div/div/div/div[2]/div/span/span/div/input')
}

class GestorVacinaPage {

    static visit() {
        cy.visit(URL);
    }

    static clickAddColeiraBtn() {
        elements.addColeiraBtn().click({ force: true });
    }

    static fillNomeColeira(nome) {
        elements.nomeColeiraInput().type(nome);
    }
    
    static fillDuracaoColeira(duracao) {
        elements.duracaoColeiraInput().type(duracao);
    }

    
}

export default GestorVacinaPage