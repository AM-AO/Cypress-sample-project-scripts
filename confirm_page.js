//prevents cypress from failing tests due to exceptions in application code
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false})

export class ConfirmPage {

    //navigates to confirm page
    goToConfirm(){
        cy.get('#Confirm').click()
      }

    unconfirmedShiftAppears(){
        cy.get('.ag-row').should('exist')
    }

}
