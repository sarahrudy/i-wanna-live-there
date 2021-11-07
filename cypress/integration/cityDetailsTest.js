describe('City Details Page', () => {

  beforeEach(() => {
    cy.fixture('singleCityDetails.json').as('city').then((city) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {body: city});
    });
    cy.visit("http://localhost:3000/3");
  });

  it('User should still see the app header with the title and description', () => {
    cy.get('header').first().contains('softWhere?');
    cy.get('header').last().contains('Best US Cities to Live as a Software Developer');
  });

  it('User should see details about a single city', () => {
    cy.get().contains('Raleigh');
  });

});