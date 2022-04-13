//page loads successfully
describe("page loads successfully", () => {
  it("page loads successfully", () => {
    
    cy.visit("http://localhost:3000/")

  })
})

//has form on page load
describe("has form on page load", () => {
  it("has form on page load", () => {
    
    cy.visit("http://localhost:3000/")

    cy.get('input[id=username]')
    cy.get('input[id=password]')
    cy.get('input[id=confirmPassword]')

    cy.contains('Username:')
    cy.contains('Password:')
    cy.contains('Confirm Password:')

    cy.get('button[type=submit]')

  })
})

//success message shouldn't be there on page load
describe("success message shouldn't be there on page load", () => {
  
  it("success message shouldn't be there on page load", () => {
    cy.visit("http://localhost:3000/")

    cy.contains('You have signed up successfully!').should('not.exist')

  })
})


//display success message on valid submission
describe("display success message on valid submission", () => {
  
  it("display success message on valid submission", () => {
    cy.visit("http://localhost:3000/")

    cy.get('input[id=username]').type('reshmy')
    cy.get('input[id=password]').type('sweetsweet')
    cy.get('input[id=confirmPassword]').type('sweetsweet')

    cy.get('button[type=submit]').click()

    cy.contains('You have signed up successfully!')



  })
})



//show error on invalid submission
describe("show error on invalid submission", () => {
  
  it("show error on invalid submission", () => {
    cy.visit("http://localhost:3000/")
    
    cy.get('input[id=username]').type('reshmy')
    cy.get('input[id=password]').type('sweetsweet')
    cy.get('input[id=confirmPassword]').type('sweetsour')

    cy.get('button[type=submit]').click()

    cy.contains('Passwords dont match. Retype your passwords.')
  })
})