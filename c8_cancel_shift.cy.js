import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('cancels a shift', () => {
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

    it('logs a user in', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    it('navigates to the scheduling page', () => {
        schedulingPage.goToScheduling()
    })

    it('selects a facility', () => {
        schedulingPage.selectFacility()
    })

    it('goes to the next week', () => {
        schedulingPage.goNextWeek()
    })

    it ('adds a shift', () => {
        schedulingPage.addShift()
    })

    it ('cancels the shift', () => {
        schedulingPage.deleteTestShift()
    })

})
