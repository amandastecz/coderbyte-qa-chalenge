import { faker } from "@faker-js/faker";
import ProductsPage from "../pages/ProductsPage";

describe('Product', () => {
    const productsPage = new ProductsPage();
    const customer = {
        username: faker.internet.email(),
        password: faker.number.int()
    }
    beforeEach(() => {
        cy.signupAndLogin(customer);
    });

    it('should add one or more products into the cart', ()=>{
        const category = "Phones";
        let indice = 1;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
        indice = 2;
        productsPage.chooseProductCategory(category);
        productsPage.addProductIntoCart(indice);
    })
});