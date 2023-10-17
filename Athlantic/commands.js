Cypress.Commands.add('validator', (texto) => {

    cy.get('.text-danger > div').should('be.visible').and('contain', texto)
  
  });