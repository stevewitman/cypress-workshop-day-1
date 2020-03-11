describe('Dashboard', () => {

  beforeEach(() => {
    // cy.visit('localhost:4200/dashboard');
    cy.visit('dashboard'); // now using baseUrl from cypress.json
  })

  it(`it has title 'Tour of Heroes'`, () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.title().should('eq', 'Tour of Heroes');
  })

  it(`has 'Tour of Heroes' in the h1`, () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.get('h1').contains('Tour of Heroes');
  })

  it('should have 4 hero links', () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.get('app-dashboard a').should('have.length', 4);
  })

  it('should have stuff on page', () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.get('nav a').first().should('contain', 'Dashboard')
  })

  it('should have stuff on page(using alias)', () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.get('nav a').as('navlinks')
    cy.get('@navlinks').should('have.length', 2)
    cy.get('@navlinks').first().should('contain', 'Dashboard')
  })

  it('should have stuff on page(using alias)', () => {
    // cy.visit('localhost:4200/dashboard'); // now from before each
    cy.get('app-dashboard a').should('have.length', 4)
    cy.get('app-dashboard a div').should('have.class', 'module hero')
  })

  it('should be able to search', () => {
    cy.get('#search-box').type('n')
    cy.get('.search-result li').should('have.length', 6)
    cy.get('#search-box').type('ice')
    cy.get('.search-result li').should('have.length', 1)
  })

  it('should be able to clear', () => {
    cy.get('button').click();
    cy.get('app-messages > div > div').should('have.length', 0)
  })

  it('should be able to click on search item', () => {
    cy.get('#search-box').type('nice');
    cy.get('.search-result li').should('have.length', 1).click();
    cy.url().should('contain', '/detail/11');
  })

})