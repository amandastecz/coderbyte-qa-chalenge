export default class CartPage{
    constructor(){
        this.linkCart = '#navbarExample > ul > li:nth-child(4)'
        this.buttonPlaceOrder = '#page-wrapper > div > div.col-lg-1 > button'
        this.inputOrderName = '[id="name"]',
        this.inputOrderCountry = '[id="country"]',
        this.inputOrderCity = '[id="city"]',
        this.inputOrderCardNumber = '[id="card"]',
        this.inputOrderCardMonth = '[id="month"]',
        this.inputOrderCardYear = '[id="year"]',
        this.buttonOrderPurchase = '#orderModal > div > div > div.modal-footer > button.btn.btn-primary',
        this.diplayThankYouPurchase = 'body > div.sweet-alert.showSweetAlert.visible'
    }

    removeAProductFromCart(indice){
        cy.get(this.linkCart).click();
        cy.wait(2000);
        cy.get(`#tbodyid > tr:nth-child(${indice}) > td:nth-child(4) > a`).click();
    }

    fillOrderForm(params){
        const {
            name,
            country,
            city,
            cardNumber,
            cardMonth,
            cardYear,
          } = params;
        cy.get(this.linkCart).click();
        cy.wait(2000);
        cy.get(this.buttonPlaceOrder).click();
        cy.wait(2000);
        cy.get(this.inputOrderName).type(name);
        cy.get(this.inputOrderCountry).type(country);
        cy.get(this.inputOrderCity).type(city);
        cy.get(this.inputOrderCardNumber).type(cardNumber);
        cy.get(this.inputOrderCardMonth).type(cardMonth);
        cy.get(this.inputOrderCardYear).type(cardYear);
        cy.get(this.buttonOrderPurchase).click();
    }
}