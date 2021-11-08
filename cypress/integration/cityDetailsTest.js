describe('City Details Page', () => {

  beforeEach(() => {
    cy.fixture('singleCityDetails.json').as('city').then((city) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {body: city});
    });
    cy.visit("http://localhost:3000/3");
  });

  it('User should still see the app header with the title and description', () => {
    cy.get('header').first().contains('softWhere?');
    cy.get('header').last().contains('Top US Cities to Live as a Software Developer');
  });

  it('User should see a header text indicating the city clicked on', () => {
    cy.get('h2').contains('Raleigh');
  });

  it('User should see an image of the city', () => {
    cy.get('img[src]')
  });
  
  it('User should see a list of information about the city', () => {
    cy.get('p').contains('Population:').should('contain.text', '474069');
    cy.get('p').contains('Population Change Since 2020:').should('contain.text', '71.7%');
    cy.get('p').contains('Number on Best Paying Cities List:').should('contain.text', '17');
    cy.get('p').contains('Median Software Developer Salary:').should('contain.text', '107676');
    cy.get('p').contains('Software Developer Jobs:').should('contain.text', '12560');
    cy.get('p').contains('Median Home Price:').should('contain.text', '267200');
    cy.get('p').contains('Big Software Companies:').should('contain.text', 'IBM');
    cy.get('.city-details-container').children().last().should('contain.text', 'Raleigh is');
  });

  it('User should be able to click a button to return to the main page', () => {
    cy.get('button[name=back to main]').click().url().should('eq', 'http://localhost/3000')
  });
});