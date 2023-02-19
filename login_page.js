//prevents cypress from failing tests due to exceptions in application code
Cypress.on('uncaught:exception', (err, runnable)=>{
  return false})

export class LoginPage {

  //navigates to login page
  // navigate(){
  //   cy.visit('/')
  // }

  //logs in 
  login(userName,password){
    cy.get('#auth-login-field-email').type(userName)
    cy.get('#auth-login-field-password').type(password, {log: false})
    cy.get('#auth-login-button-submit').click()
    
    // return this;
  }

  //validates URL 
  validateURL(){
    cy.wait(6000)
    cy.url().should('include','/dashboard')
  }

  //validates error message when login fails
  validateLoginFailed(){
    cy.wait(6000)
    cy.get('#auth-login > p').should('have.text','Login Failed')
  }
}

