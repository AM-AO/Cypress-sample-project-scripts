import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates a shift for a caregiver', () => {
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

    it('selects a facility', () => {
        schedulingPage.selectFacility()
    })

    it('selects an employee', () => {
        schedulingPage.selectEmployee()
    })

    it('moves two weeks ahead', () => {
        schedulingPage.goNextNextWeek()
    })

    it ('adds a shift', () => {
        schedulingPage.addShift()
    })

    it ('verifies the shift was added', () => {
        cy.get('.MuiAvatar-root').should('be.visible')
    })

    it ('deletes the test shift', () => {
        schedulingPage.deleteTestShift()
    })
})
