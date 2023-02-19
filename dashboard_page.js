//prevents cypress from failing tests due to exceptions in application code
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false})

// defining elements and actions for dashboard page
export class DashboardPage {

  //verifies dashboard URL
  verifyDashboardURL(){
      cy.wait(6000)
      cy.url().should('include','/dashboard')
  }

  //logs the user out
  logOut(){
    cy.get('#download-menu-button').click()
    cy.get('#menu-appbar-download').contains('Logout').click()
  }
  
  //verify that user has been logged out
  verifyLoggedOut(){
    cy.wait(6000)
    cy.url().should('include', '/auth')
  }

}
