const URL = 'http://172.19.145.29:8091'

class AppsmithLoginPage{

    elements = {
        emailInput : () => cy.get('input[name="username"]'),
        passwordInput : () => cy.get('input[name="password"]'),
        loginBtn : () => cy.xpath('//*[@id="root"]/div[2]/div/div[1]/form/div[3]/button/div/span'),
    }


    static visit() {
        cy.visit(URL);
    }


    static fillEmailInput(email) {
        this.elements.emailInput().clear();
        this.elements.emailInput().type(email);
    }


    static fillPasswordInput(password) {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }


    static submit() {
        this.elements.loginBtn().click();
    }
}

export default AppsmithLoginPage