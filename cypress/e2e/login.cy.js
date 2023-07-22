import { faker } from "@faker-js/faker";
import SignupPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";

describe('Login', () => {
    describe('Given a form', () => {
        const signupPage = new SignupPage();
        const loginPage = new LoginPage();
        const customer = {
            username: faker.internet.email(),
            password: faker.number.int()
        }
        before(() => {
            signupPage.visit();
            signupPage.signup(customer);
        });

        beforeEach(() => {
            loginPage.visit();
        });

        it('should login and logout successfully when customer insert valid credentials', ()=>{
            loginPage.login(customer);
            cy.get(loginPage.linkWelcome).should('be.visible');
            loginPage.logout();
            cy.get(loginPage.linkLogin).should('be.visible');
        });

        
        it('should display a error message and not login the customer when try to login with an invalid credentials', ()=>{
            const input = {
                username: customer.username,
                password: "wrong"
            }
            loginPage.login(input);
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.include('Wrong password.');
            });
        });
    });
})