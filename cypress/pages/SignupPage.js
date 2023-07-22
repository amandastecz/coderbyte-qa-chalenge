export default class SignupPage{
    constructor(){
        this.url = Cypress.env('base_url');
        this.linkSignup = '[id="signin2"]';
        this.modalSignup = '#signInModal > div > div';
        this.inputUsername = '[id="sign-username"]';
        this.inputPassword = '[id="sign-password"]';
        this.buttonSignup = 'div.modal-footer > button.btn.btn-primary';
    }

    visit(){
        cy.visit(this.url);
    }

    signup(params){
        cy.get(this.linkSignup).click();
        cy.wait(3000);
        cy.get(this.modalSignup).within(() => {
            cy.get(this.inputUsername).clear().type(params.username);
            cy.get(this.inputPassword).clear().type(params.password);
            cy.get(this.buttonSignup).should('be.visible').click();
        });
        cy.wait(3000);
    }
}