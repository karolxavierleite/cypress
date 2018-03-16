describe('Pagina de autenticacao', function() {
  beforeEach(function () {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('exibe a area segura quando um usuario valido se autentica', function() {
   cy.get('#username').type('tomsmith')
   cy.get('#password').type('SuperSecretPassword!')
   cy.get('.radius').click()

   cy.get('#flash').should('contain', 'You logged into a secure area!')
   cy.get('h2').should('contain', 'Secure Area')
   cy.get('h4').should('contain', 'Welcome to the Secure Area. When you are done click logout below.')
   cy.get('.button.secondary.radius').should('contain', 'Logout')
   cy.url().should('contain', '/secure')
  })

  it('exibe mensagem de erro quando um usuario nao cadastrado tenta se autenticar', function () {
    cy.get('#username').type('foo')
    cy.get('#password').type('eita!')
    cy.get('.radius').click()

    cy.get('#flash').should('contain', 'Your username is invalid!')
  })
})
