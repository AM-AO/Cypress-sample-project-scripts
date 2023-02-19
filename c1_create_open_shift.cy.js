import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates open shift', () =>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

  it('logs in with user type 1', ()=>{
      const username = Cypress.env('username')
      const password = Cypress.env('password')

      cy.visit('/auth')
      loginPage.login(username,password)
      loginPage.validateURL()
  })

  it('navigates to the scheduling page', () =>{
    schedulingPage.goToScheduling()
  })

  it('selects a facility', ()=>{
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

  it('verifies shift was added', ()=>{
    schedulingPage.shiftAppears()
  })

  it ('deletes the test shift', ()=>{
    schedulingPage.deleteTestShift()
  })
})
