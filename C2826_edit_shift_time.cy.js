import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

//test to edit a shift time

describe('edits a shift time', ()=>{
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

    it('selects an employee', () =>{
        schedulingPage.selectEmployee()
    })

    it('moves two weeks ahead', ()=>{
        schedulingPage.goNextNextWeek()
    })

    it ('adds a shift', ()=>{
        schedulingPage.addShift()
    })

    it ('selects the shift', ()=>{
        schedulingPage.selectOpenShift()
    })

    it ('edits the shift time', ()=>{

        //opens the 'time:' dropdown
        cy.get('#time-expansion-panel').click()


        //edits the shift start & end time
        cy.get('.react-datepicker-wrapper')
        .each(($ele, index) => {
            if (index ===1) cy.wrap($ele).click().get('.react-datepicker__time-list > :nth-child(27)').click()
            if (index ===2) cy.wrap($ele).click().get('.react-datepicker__time-list > :nth-child(57)').click() 
          })

        //verifies the shift duration
        cy.get('#editshift-shift-duration').should('have.value','07:30')

        //saves changes
        cy.get('#save-add-emp-btn').click()

    })

    it ('deletes the test shift', () =>{
        schedulingPage.deleteTestShift()
    })
    
    })