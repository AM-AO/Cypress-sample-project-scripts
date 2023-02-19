import { DashboardPage } from '../page-objects/dashboard_page'
import { LoginPage } from '../page-objects/login_page'

//test to log a user out from the dashboard
describe('logs user out from the dashboard and verifies that user is logged out', () => {
    const dashboardPage = new DashboardPage()
    const loginPage = new LoginPage()

it('logs a user in', ()=>{

    const username = Cypress.env('username')
    const password = Cypress.env('password')

    // loginPage.navigate()
    cy.visit('/auth')
    loginPage.login(username,password)
    loginPage.validateURL()
})

it('logs a user out from the dashboard page', () => {
        dashboardPage.logOut()
        cy.wait(6000)
        dashboardPage.verifyLoggedOut()
    })
  })