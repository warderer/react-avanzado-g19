describe('Mi primer grupo de pruebas', () => {
  it('Leo la palabra Home en /', () => {
    // 01. Establecer el estado de la App
    cy.visit('/')

    // 02 Realizar acciones
    cy.get('h1').contains('Home')
    // 03 Espero un resultado
  })
})
