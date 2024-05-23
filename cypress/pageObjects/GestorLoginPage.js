import xpath from 'cypress-xpath'

const URL = 'http://172.19.145.29:8091/app/appsmithgestor/inicio-664b8ff03d0ee46738b29b3e?branch=develop';
const semoventesPageURL = 'http://172.19.145.29:8091/app/appsmithgestor/semoventes';
const elements = {
    emailInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/span/span/div/input'),
    passwordInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div[2]/div/span/span/div/input'),
    btnLogin : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[3]/div'),
    loginError : () => cy.xpath('/html/body/div[3]/div[1]/div/div'),
    semoventesPainelSpan : () => cy.get('span').contains('Painel'),
};

class GestorLoginPage {

    static visit() {
        cy.visit(URL);
    }

    static verifyUrl(email) {
        cy.url().should('eq', URL);
    }

    static fillEmailInput(email) {
        elements.emailInput().clear();
        elements.emailInput().type(email, { log: false });
    }

    static fillPasswordInput(password) {
        elements.passwordInput().clear();
        elements.passwordInput().type(password, { log: false });
    }

    static submit() {
        elements.btnLogin().click();
        cy.url().should('include', semoventesPageURL);
    }
}

export default GestorLoginPage