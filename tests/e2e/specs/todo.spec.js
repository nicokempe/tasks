describe('ToDo App', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('can add a new task', () => {
    cy.get('.input-task').type('New Task{enter}');
    cy.get('.task-list').should('contain', 'New Task');
  });

  it('can remove a task', () => {
    cy.get('.task-item button').click();
    cy.get('.task-list').should('not.contain', 'New Task');
  });
});
