const elements = {
    emailInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[1]/div/div/div/div[2]/div/span/span/div/input'),
    passwordInput : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[2]/div/div/div/div[2]/div/span/span/div/input'),
    btnLogin : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div/div/div/div/div[3]/div'),
    loginError : () => cy.xpath('/html/body/div[3]/div[1]/div/div'),
    semoventesContainer : () => cy.xpath('/html/body/div[3]/div[2]/section/section/div/div/div/div/div/div'),
};

class GestorLoginPage {

    static verifyUrl(email) {
        
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
        elements.btnLogin().click();
        elements.semoventesContainer();
    }
}

export default GestorLoginPage