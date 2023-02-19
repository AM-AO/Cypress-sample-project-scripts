import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('boosts a shift', ()=>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

    it('logs a user in', ()=>{
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    it('navigates to the scheduling page', () =>{
        schedulingPage.goToScheduling()
    })

    it ('selects a facility', () =>{
        schedulingPage.selectFacility()
    })

    it('selects employee type', ()=>{
        schedulingPage.setCaregiverType()
      })
    
    it('goes to the next week', ()=>{
        schedulingPage.goNextWeek()
       })
    
    it('adds an unassigned shift', ()=>{
        schedulingPage.addShift()
       })

    it ('selects the unassigned shift', () =>{
        schedulingPage.selectOpenShift()
    })

    it ('edits the shift rate', () =>{
        cy.get('#rates-expansion-panel').click()
        cy.get('#editshift-pay-adj').click().type('{backspace} {backspace} {backspace} {backspace}').type('5.00')
    })

    it ('selects a reason for the adjustment and saves', () =>{
        cy.get('[id^=pay-adjust-reason]').first().click()
        cy.get('li').contains('Urgent Requirement').click()
        cy.get('#save-add-emp-btn').click()
        cy.wait(5000)
    })

    it ('deletes the test shift', () =>{
        schedulingPage.deleteTestShift()
    })
})
