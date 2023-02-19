//prevents cypress from failing tests due to exceptions in application code
Cypress.on('uncaught:exception', (err, runnable)=>{
  return false})

  export class SchedulingPage {

    //navigates to the scheduling page
    goToScheduling(){
      cy.get('#Scheduling').click()
    }

    //selects a facility from dropdown
    selectFacility(){
      cy.get('#facility-select-input-0').click({force: true})
      cy.get('#react-select-2-option-0').should('exist')
      cy.get('#react-select-2-option-0').click({force: true})
      
      return this;
    }

    //selects an employee from dropdown 
    selectEmployee(){
      cy.get('#employee-select').click()
      cy.get('#react-select-4-option-0-0').click()
    }

    //views open shifts
    viewOpenShifts(){
      cy.get('#Open').click()
    }

    //clicks on the right arrow above the calendar to move to the next week
    goNextWeek(){
      cy.get('#next-week').click({force:true})
    }

    //double clicks right arrow above the calendar to move two weeks ahead
    goNextNextWeek(){
      cy.get('#next-week').dblclick({force:true})
    }

    //clicks right arrow above the calendar 4 times to move one month ahead 
    goNextMonth(){
      cy.get('#next-week').dblclick({force:true}).dblclick({force:true})
    }

    //clicks the radio button to select caregiver type
    setCaregiverType(){
      cy.get('#RN').click({force: true})
    }

    //clicks the '+' button to add an unassigned shift 
    addShift(){
      cy.wait(5000)
      cy.get('#create-shift-button').first().click({force: true})
    }

    //adds seven shifts in a row and approves OT
    addOtShifts(){
      cy.get('[id^=create-shift-button]')
      .each(($ele, index) => {
        if (index <6 ) cy.wrap($ele).click().wait(2000)
      })
      cy.get('#confirmation-dialog-title').should('be.visible')
      cy.get('#override-understanding-toggle').click()
      cy.get('#notes').type('Test note')
      cy.get('#confirmation-Confirm').click({force: true}).wait(2000)
      }

    //deletes overtime shifts that were created in addOtShifts
    deleteOtshifts(){
      cy.get('.MuiChip-label')
      .each(($ele, index) => {
        if (index <=5 ) cy.wrap($ele).rightclick().get('li').contains('Cancel').click().get('li').contains('Booking Error').click()
      })
    }

    //verifies that the shift appears on the calendar
    shiftAppears(){
      cy.wait(6000)
      cy.get('.MuiChip-label').contains('Unassigned').should('be.visible')
    }

    //clicks to open unassigned shift
    selectOpenShift(){
    cy.get('.MuiChip-label').last().click()
    }

    //assigns caregiver to unconfirmed shift
    assignCaregiver(){
    cy.get('#confirmation-Unconfirmed').click()
    }

    //deletes a test shift
    deleteTestShift(){
    cy.get('.MuiAvatar-root').rightclick().get('li').contains('Cancel').click().get('li').contains('Booking Error').click()
    cy.get('.MuiAvatar-root').should('not.exist')
    }
}
