describe('City Details Page', () => {

  beforeEach(() => {
    cy.fixture('singleCityDetails.json').as('city').then((city) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {body: city});
    });
    cy.visit("http://localhost:3000/3");
  });

  it('User should still see the app header with the title and description', () => {
    cy.get('header').first().contains('softWhere?');
    cy.get('header').last().contains('TOP US CITIES TO LIVE AS A SOFTWARE DEVELOPER');
  });

  it('User should see a header text indicating the city clicked on', () => {
    cy.get('h2').contains('Raleigh');
  });

  it('User should see an image of the city', () => {
    cy.get('img[src]')
  });
  
  it('User should see a list of information about the city', () => {
    cy.get('strong').contains('Population:').parent().should('contain.text', '474069');
    cy.get('strong').contains('Population Change Since 2020:').parent().should('contain.text', '71.7%');
    cy.get('strong').contains('Number on Best Paying Cities List:').parent().should('contain.text', '17');
    cy.get('strong').contains('Median Software Developer Salary:').parent().should('contain.text', '107676');
    cy.get('strong').contains('Software Developer Jobs:').parent().should('contain.text', '12560');
    cy.get('strong').contains('Median Home Price:').parent().should('contain.text', '267200');
    cy.get('.city-details-container').children().last().should('contain.text', 'Raleigh is');
  });

  it('User should be able to click a button to return to the main page', () => {
    cy.get('button[name=back to main]').click().url().should('eq', 'http://localhost/3000')
  });
});