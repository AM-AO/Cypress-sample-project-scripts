import {LoginPage} from '../page-objects/login_page'

//test to login with valid credentials 
describe('Valid User Login', () => {
  const loginPage = new LoginPage()

  it('logs a user in with valid credentials and validates the dashboard URL', ()=>{

      const username = Cypress.env('username')
      const password = Cypress.env('password')

      // loginPage.navigate()
      cy.visit('/auth')
      loginPage.login(username,password)
      loginPage.validateURL()

  })
})