// import { ConfirmPage } from '../page-objects/confirm_page'
import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates a shift for a caregiver', ()=>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

    it('logs in with MAS scheduler user', ()=>{
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    //1. Click the "Scheduling" tab
    it('navigates to the scheduling page', () =>{
        schedulingPage.goToScheduling()
    })

    //2. Click the Facility tab and select a facility
    it('selects a facility', () =>{
        schedulingPage.selectFacility()
    })

    //3. Click the Employee tab and select an employee
    it('selects an employee', () =>{
        schedulingPage.selectEmployee()
    })

    it('moves two weeks ahead', ()=>{
        schedulingPage.goNextNextWeek()
    })

    //4. Select an open day/shift on the calendar; 5.Click the "+" button for that day/shift.
    it ('adds a shift', ()=>{
        schedulingPage.addShift()
    })

    //Verifies the shift was added by asserting that the avitar should be visible
    it ('verifies the shift was added', ()=>{
        cy.get('.MuiAvatar-root').should('be.visible')
    })

    it ('deletes the test shift', ()=>{
        schedulingPage.deleteTestShift()
    })
})