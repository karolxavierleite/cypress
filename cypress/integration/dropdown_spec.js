describe('Dropdown', function() {
  beforeEach(function () {
    cy.visit('https://the-internet.herokuapp.com/dropdown')
  })

  it('exibe uma listagem de 2 opcoes', function() {
    cy.get('option').should('have.length', 3)
  })

  it('eh possivel selecionar as 2 opcoes', function() {
    cy.get('#dropdown').select('Option 1')
    cy.get('#dropdown').select('Option 2')
  })
})
