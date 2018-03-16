describe('Esqueci minha senha', function() {
  beforeEach(function () {
    cy.visit('https://the-internet.herokuapp.com/forgot_password')
  })

  it('exibe mensagem de email enviado quando os dados sao preenchidos', function() {
    cy.get('#email').type('karolxavierleite@gmail.com')
    cy.get('#form_submit').click()

    cy.get('#content').should('contain', "Your e-mail's been sent!")
    cy.url().should('contain', '/email_sent')
  })

  it('exibe mensagem de erro quando os dados nao sao preenchidos', function() {
    cy.get('#form_submit').click()
    cy.get('h1').should('have.text', 'Internal Server Error')
    cy.url().should('contain', '/forgot_password')
  })
})
