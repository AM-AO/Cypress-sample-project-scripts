import { LoginPage } from '../page-objects/login_page'
import { ValidationPage } from '../page-objects/validation_page'

describe('validates a shift', () => {
    const loginPage = new LoginPage()
    const validationPage = new ValidationPage()

    it('logs a user in', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
  
        cy.visit('')
        loginPage.login(username,password)
        loginPage.validateURL()
    })

    it('goes to the validation screen', () => {
        validationPage.goToValidation()
    })

    it('edits the first shift', () => {

        //selects the shift and clicks the "edit" icon
        cy.get('.ag-row-first > [aria-colindex="3"]').click()

        //clicks the time dropdown menu
        cy.get('#time-expansion-panel').click()

        //adds actual shift start and end times
        cy.get('.react-datepicker-wrapper')
        .each(($ele, index) => {
            if (index ===2) cy.wrap($ele).click().get('.react-datepicker').type('Sun, Dec 24, 08:00 am')
            if (index ===3) cy.wrap($ele).click().get('.react-datepicker').type('Sun, Dec 24, 06:00 pm')
          })

        //adds a 30 minute break 
        cy.get('#editshift-actual-break').click().clear().type('30')

        //uploads a timesheet
        cy.get('label > .MuiButtonBase-root > .MuiButton-label')
        cy.get('input[type=file]').selectFile('cypress/fixtures/anotherTimesheet.jpg', {force: true})

        //saves timesheet
        cy.get('.jss139 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#save-add-emp-btn').click().wait(5000)
        
        //verifies that the shift is marked OK for payroll 
        cy.get('.ag-row-first > [aria-colindex="4"] > .ag-react-container > .svg-inline--fa').should('be.visible')
        
    })

    it ('resets test data', () => {
        
        //this step unassociates the timesheet so that the unvalidated shift will be available for the next test run:
        
        //1. selects the shift again and clicks the "edit" icon
        cy.get('.ag-row-first > [aria-colindex="3"]').click().wait(3000)

        //2. unassociates the timesheet, confirms, and saves changes 
        cy.get('.MuiButton-label').contains('Unassociate Timesheet').click()
        cy.get('.MuiButton-label').contains('Click to Confirm').click()
        cy.get('#save-add-emp-btn').click()
    })

})
