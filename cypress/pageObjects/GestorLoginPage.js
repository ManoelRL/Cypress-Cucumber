import xpath from 'cypress-xpath'

const testURL = 'http://172.19.145.29:8091/app/appsmithgestor/inicio-664b8ff03d0ee46738b29b3e?branch=develop';
const semoventesPageURL = 'http://172.19.145.29:8091/app/appsmithgestor-20-05/semoventes';
const URL = 'http://172.19.145.29:8091/app/appsmithgestor-20-05/inicio-664b8ff03d0ee46738b29b3e?branch=main'
const elements = {
    emailInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/span/span/div/inputt'),
    passwordInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div[2]/div/span/span/div/input'),
    btnLogin : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[3]/div'),
    loginError : () => cy.contains('Erro de Login!'),
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

    static shouldShowErrorMessage() {
        elements.loginError().should('be.visible');
    }
}

export default GestorLoginPage