import xpath from 'cypress-xpath'

const URL = 'http://172.19.145.29:8091';
const AppUrl = 'http://172.19.145.29:8091/app/appsmithgestor/inicio-664b8ff03d0ee46738b29b3e?branch=develop';
const elements = {
    emailInput : () => cy.get('input[name="username"]'),
    passwordInput : () => cy.get('input[name="password"]'),
    loginBtn : () => cy.xpath('//*[@id="root"]/div[2]/div/div[1]/form/div[3]/button/div/span'),
    container : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div'),
};


class AppsmithLoginPage{ 

    static visit() {
        cy.visit(URL);
    }


    static fillEmailInput(email) {
        elements.emailInput().clear();
        elements.emailInput().type(email);
    }


    static fillPasswordInput(password) {
        elements.passwordInput().clear();
        elements.passwordInput().type(password);
    }


    static submit() {
        elements.loginBtn().click();
        cy.visit(AppUrl);
    }

    static verifyLoginPage() {
        elements.container().should('be.visible');
    }
}

export default AppsmithLoginPage