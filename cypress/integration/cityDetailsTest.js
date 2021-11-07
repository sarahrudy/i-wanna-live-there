describe('City Details Page', () => {

  beforeEach(() => {
    cy.fixture('singleCityDetails.json').as('city').then((city) => {
      cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {body: city});
    });
    cy.visit("http://localhost:3000/3");
  });

  it('User should')
});