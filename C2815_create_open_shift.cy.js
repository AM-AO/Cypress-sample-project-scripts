import { LoginPage } from '../page-objects/login_page'
import { SchedulingPage } from '../page-objects/scheduling_page'

describe('creates open (unassigned) shift', () =>{
    const schedulingPage = new SchedulingPage()
    const loginPage = new LoginPage()

  it('logs in with MAS scheduler user', ()=>{
      const username = Cypress.env('username')
      const password = Cypress.env('password')

      cy.visit('/auth')
      loginPage.login(username,password)
      loginPage.validateURL()
  })

  // 1. Click the 'Scheduling' tab
  it('navigates to the scheduling page', () =>{
    schedulingPage.goToScheduling()
  })

  // 2. Click the facility drop down; 3. Select a facility
  it('selects a facility', ()=>{
    schedulingPage.selectFacility()
  })

  // 4. Select 'RN' radio button
  it('selects RN radio button', ()=>{
    schedulingPage.setCaregiverType()
  })

  // 5. Navigate to the following week
  it('goes to the next week', ()=>{
    schedulingPage.goNextWeek()
  })

  // 6.Click '+' button for the first shift on the first day of the week
  it('adds an unassigned shift', ()=>{
    schedulingPage.addShift()
  })

  // verifies expected result: an unassigned shift should be created for the correct shift/day
  it('verifies shift was added', ()=>{
    schedulingPage.shiftAppears()
  })

  it ('deletes the test shift', ()=>{
    schedulingPage.deleteTestShift()
  })
})