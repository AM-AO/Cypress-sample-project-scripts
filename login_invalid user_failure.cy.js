import {LoginPage} from '../page-objects/login_page'

//test to login with invalid credentials 
describe('Invalid User Login', () => {
  const loginPage = new LoginPage()

  it('logs a user in with invalid credentials and validates error message', ()=>{
      // loginPage.navigate()
      cy.visit('/auth')
      loginPage.login('aandersonozhoh@mergeworld.com','March25uat!')
      loginPage.validateLoginFailed
  })
})