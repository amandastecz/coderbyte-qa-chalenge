export default class LoginPage{
    constructor(){
        this.url = Cypress.env('base_url');
        this.linkLogin = '[id="login2"]';
        this.linkLogout = '[id="logout2"]';
        this.linkWelcome = '[id="nameofuser"]';
        this.modalLogin = '#logInModal > div > div';
        this.inputUsername = '[id="loginusername"]';
        this.inputPassword = '[id="loginpassword"]';
        this.buttonLogin = 'div.modal-footer > button.btn.btn-primary';
    }

    visit(){
        cy.visit(this.url);
    }

    login(params){
        cy.get(this.linkLogin).should('be.visible').click();
        cy.wait(2000);
        cy.get(this.modalLogin).within(() => {
            cy.get(this.inputUsername).clear().type(params.username);
            cy.get(this.inputPassword).clear().type(params.password);
            cy.get(this.buttonLogin).should('be.visible').click();
        });
        cy.wait(2000);
    }

    logout(){
        cy.get(this.linkLogout).click();
    }
}