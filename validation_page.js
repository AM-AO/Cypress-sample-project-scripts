//prevents cypress from failing tests due to exceptions in application code
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false})
  
    export class ValidationPage {
  
      //navigates to the scheduling page
      goToValidation(){
        cy.get('#Validation').click()
    }
    }
