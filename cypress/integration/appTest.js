describe('App Home Page', () => {

  beforeEach(() => {
    cy.fixture('multipleCities.json').as('cities').then((cities) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities', {body: cities});
    });

    cy.visit('http://localhost:3000');
  });

  it('User should see a header containing the app title and description', () => {
    cy.get('header').first().contains('softWhere?');
    cy.get('header').last().contains('TOP US CITIES TO LIVE AS A SOFTWARE DEVELOPER');
  });

  it('User should see all available city cards when the page loads', () => {
    cy.get('.cities-container')
    .children().should('have.length', 4);
  });

  it('User should be able to click a movie and see details for that movie', () => {
    cy.get('article >p')
    .contains("Raleigh").click().url().should('include', 'http://localhost:3000/3');
  });


  it('User should be able to type in the search bar and see the cities filtered on the page', () => {
    cy.get('input[type=text]').type('D')
    cy.get('.cities-container').children().should('have.length', 1)

    cy.get('input[type=text]').type('e').clear()
    cy.get('.cities-container').children().should('have.length', 4)
  })
});