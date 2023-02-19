import { ConfirmPage } from '../page-objects/confirm_page'
import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('assigns a caregiver to an open shift', ()=>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()
    const confirmPage = new ConfirmPage()

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

    //2. Click the facility drop down and select a facility
    it ('selects a facility', () =>{
        schedulingPage.selectFacility()
    })

    it('sets caregiver type', ()=>{
        schedulingPage.setCaregiverType()
    })

    it('goes to next week', ()=>{
        schedulingPage.goNextWeek()
    })

    it ('creates an open shift', () =>{
        schedulingPage.addShift()
    })

    it('verifies shift was added', ()=>{
        schedulingPage.shiftAppears()
    })

    //3. Click the employee drop down and select an employee
    it('selects an employee', () =>{
        schedulingPage.selectEmployee()
    })

    //4. Select the "open" view
    it('views open shifts', () =>{ 
        schedulingPage.viewOpenShifts()
    })

    //5. Left-click the shift
    it('selects the assigned shift', () =>{
        schedulingPage.selectOpenShift()
    })

    //6. Select "unconfirmed" in the "Assign Shift?" modal
    it ('assigns caregiver to unassigned shift', () =>{
        schedulingPage.assignCaregiver()
    })

    //7. Click the "Confirm" tab and verify the assigned shift is present on the list of unconfirmed shifts
    it ('verifies shift is available on confirmations screen', () =>{
        confirmPage.goToConfirm()
        confirmPage.unconfirmedShiftAppears()
    })

    it ('returns to the scheduling page and deletes the test shift', () =>{
        schedulingPage.goToScheduling()
        cy.get('.MuiAvatar-root')
        .each(($ele, index) => {
            if (index <=2 ) cy.wrap($ele).rightclick().get('li').contains('Cancel').click().get('li').contains('Booking Error').click()
          })
        
    })
    
})