describe('API Sad Paths', () => {

  it('Should show an error when there is a server issue fetching all cities', () => {
    cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities', {
      body: {some: 'thing'},
        statusCode: 500
    });
    
    cy.visit("http://localhost:3000");
    cy.get('.error-msg')
    .contains('Sorry...something went wrong with the server')
  });

  it('Should show an error when there is a client issue fetching all cities', () => {
    cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities', {
      body: {some: 'thing'},
        statusCode: 404
    });

    cy.visit("http://localhost:3000");
    cy.get('.error-msg')
    .contains('Error for client')
  });

  it('Should show an error when there is a server issue fetching a specific city', () => {
    cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {
        body: {some: 'thing'},
          statusCode: 500
    });

    cy.visit("http://localhost:3000/3");
    cy.get('.error-msg')
    .contains('Sorry...something went wrong with the server')
  });

  it('Should show an error when there is a client issue fetching a specific city', () => {
    cy.intercept('GET', 'https://softwhere-api.herokuapp.com/cities/3', {
        body: {some: 'thing'},
          statusCode: 404
    });

    cy.visit("http://localhost:3000/3");
    cy.get('.error-msg')
    .contains('Error for client')
  });

});
