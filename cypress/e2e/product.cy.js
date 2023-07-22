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

    it('should add one or more products into the cart and place an order ', ()=>{
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
});