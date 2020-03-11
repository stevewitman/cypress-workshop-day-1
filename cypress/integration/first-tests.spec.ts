describe('Our First Test', () => {

  it('is my first test with Cypress', () => {
    cy.visit('/')
    cy.get('h1').contains('Tour of Heroes')
  })

  it('should contain class of hero ', () => {
    cy.visit('/')
    cy.get('div')
  })

})