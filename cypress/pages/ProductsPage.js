export default class ProductsPage{
    constructor(){
        this.linkHome = '[id="nava"]';
        this.content = '[id="contcont"]';
        this.menuCategories = '.list-group';
        this.buttonAddToCart = '#tbodyid > div.row > div > a';
        this.nextButton = '#next2';
    }

    chooseProductCategory(category){
        cy.get(this.linkHome).click();
        cy.get(this.content).within(() => {
            cy.get(this.menuCategories).within(() => {
              cy.contains('a', category).click(); 
            });
         });
    }

    addProductIntoCart(indice){
        cy.wait(3000);
        cy.get(`#tbodyid > div:nth-child(${indice}) > div > a`).click();
        cy.wait(3000);
        cy.get(this.buttonAddToCart).click(); 
    }

    checkIfProductExist(keyword){
       cy.wait(3000)
       cy.get(`#tbodyid > div:nth-child(1) > div > div > h4 > a`).contains(keyword);
    }
}