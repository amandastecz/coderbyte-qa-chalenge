import { faker } from "@faker-js/faker";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

describe('Product', () => {
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const customer = {
        username: faker.internet.email(),
        password: faker.number.int()
    }
    beforeEach(() => {
        cy.signupAndLogin(customer);
    });

    it('should add one or more products into the cart and place an order', ()=>{
        const category = "Phones";
        const order = {
            name: customer.username,
            country: 'Brazil',
            city: 'Florianópolis',
            cardNumber: faker.number.int(),
            cardMonth: '11',
            cardYear: '31',
        }
        let indice = 1;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
        indice = 2;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
        cartPage.removeAProductFromCart(indice);
        cartPage.fillOrderForm(order);
        cy.get(cartPage.diplayThankYouPurchase).should('be.visible');
    });

    it('should place an order and validate if charged information is correct in confirmation popup', ()=>{
        const category = "Phones";
        const order = {
            name: customer.username,
            country: 'Brazil',
            city: 'Florianópolis',
            cardNumber: faker.number.int(),
            cardMonth: '11',
            cardYear: '31',
        }
        let indice = 1;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
        indice = 2;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
        cartPage.removeAProductFromCart(indice);
        cartPage.fillOrderForm(order);
        cy.get(cartPage.diplayThankYouPurchase).should('be.visible');
        cartPage.validateConfirmationPopupInfo(order);
    });


    it('should click in which category and navigate through it, checking the corresponding products', () =>{
        let category = "Phones";
        let product = "Samsung galaxy s6";
        productsPage.chooseProductCategory(category);
        productsPage.checkIfProductExist(product);
        category = "Laptops";
        product = "Sony vaio i5";
        productsPage.chooseProductCategory(category);
        productsPage.checkIfProductExist(product);
        category = "Monitors";
        product = "Apple monitor 24";
        productsPage.chooseProductCategory(category);
        productsPage.checkIfProductExist(product);
    });
});