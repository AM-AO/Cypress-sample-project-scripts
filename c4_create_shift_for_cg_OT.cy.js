import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates a shift for a caregiver who will be in OT', () => {
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

    it('logs in with user type 1', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    it('navigates to the scheduling page', () => {
        schedulingPage.goToScheduling()
    })

    it ('selects a facility', () => {
        schedulingPage.selectFacility()
    })

    it('selects an employee', () => {
        schedulingPage.selectEmployee()
    })

    it('goes to the next month', () => {
        schedulingPage.goNextMonth()
    })

    it('adds OT shifts', () => {
        schedulingPage.addOtShifts()
    })

    it('deletes OT shifts', () => {
        schedulingPage.deleteOtshifts()
    })
})
