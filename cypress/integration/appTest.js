describe('App Home Page', () => {

  beforeEach(() => {
    cy.fixture('multipleCities.json').as('cities').then((cities) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities', {body: cities});
    });

    cy.visit('http://localhost:3000');
  });

  it('User should see a header containing the app title and description', () => {
    cy.get('header').first().contains('softWhere?');
    cy.get('header').last().contains('Top US Cities to Live as a Software Developer');
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
    cy.get('input[type=searchbar]').type('D')
    cy.get('.cities-container').children().should('have.length', 3)

    cy.get('input[type=searchbar]').type('e')
    cy.get('.cities-container').children().should('have.length', 1)
  })
});