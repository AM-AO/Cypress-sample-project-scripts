// import { ConfirmPage } from '../page-objects/confirm_page'
import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates a shift for a caregiver who will be in OT', ()=>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

    it('logs in with MAS scheduler user', ()=>{
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    //1. Scheduling
    it('navigates to the scheduling page', () =>{
        schedulingPage.goToScheduling()
    })

    //2. Select facility
    it ('selects a facility', () =>{
        schedulingPage.selectFacility()
    })

    //3. Select employee
    it('selects an employee', () =>{
        schedulingPage.selectEmployee()
    })

    it('goes to the next month', ()=>{
        schedulingPage.goNextMonth()
    })

    //4.Select shift day/time and click "+"; 5.Create 5 shifts and then create a 6th shift; 6.Verify OT modal displays;
    //7.Select "I do not have an OT document"; 8. Add a note; Click "CONFIRM"
    it('adds OT shifts', ()=>{
        schedulingPage.addOtShifts()
    })

    it('deletes OT shifts', ()=>{
        schedulingPage.deleteOtshifts()
    })
})