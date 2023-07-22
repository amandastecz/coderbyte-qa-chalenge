import { faker } from "@faker-js/faker";
import SignupPage from "../pages/SignUpPage";

describe('Signup', () => {
    describe('Given a form', () => {
        const signupPage = new SignupPage();
        const customer = {
            username: faker.internet.email(),
            password: faker.number.int()
        }
        beforeEach(() => {
            signupPage.visit();
        });

        it('should create an account when customer signup with valid credentials', ()=>{
            signupPage.signup(customer);
            cy.on('window:alert', (alertText) => {
                expect(alertText).to.include('Sign up successful.');
            });
        });
        
        it('should not create multiples accounts when customer insert same credentials ', ()=>{
            signupPage.signup(customer);
            cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('This user already exist.');
            });
        });
    });
})