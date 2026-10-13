describe('Gerenciador de Tarefas', () => {
  it('Adiciona uma nova tarefa', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid="input-tarefa"]').type('Aprender Cypress');
    cy.get('[data-testid="botao-adicionar"]').click();

    cy.get('[data-testid="lista-tarefas"]')
      .should('contain', 'Aprender Cypress');
  });

  it('Não adiciona tarefa vazia', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid="botao-adicionar"]').click();

    cy.get('[data-testid="lista-tarefas"] li').should('have.length', 0);
  });
});