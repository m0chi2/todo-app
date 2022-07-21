describe('Hope pame', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Enter tasks in the form and submit my input', () => {
    cy.get('#todoInput')
      .should('be.empty')
      .and('have.attr', 'placeholder', 'タスクを入力してEnterを押してね')
      .type('これはテスト用の投稿です{enter}');
    cy.getBySel('blockUpper')
      .within(() => {
        return cy.getBySel('list').children();
      })
      .contains('これはテスト用の投稿です');
  });

  describe('Count tasks', () => {
    it('Count initial tasks in the progress bar', () => {
      cy.getBySel('list')
        .children()
        .should('have.length', 1)
        .find(':checkbox')
        .should('not.have.checked')
        .and('have.length', 1);
      cy.getBySel('todoLengthDone').contains('0');
      cy.getBySel('todoLengthAll').contains('1');
      cy.getBySel('todoLengthMessage').contains(
        '残り1個です！その調子で取り組みましょう',
      );
    });

    it('Count added taskes in the progress bar', () => {
      cy.get('#todoInput')
        .should('be.empty')
        .type('これは追加カウントテスト1用の投稿です{enter}')
        .type('これは追加カウントテスト2用の投稿です{enter}');
      cy.getBySel('blockUpper').within(() => {
        return cy
          .getBySel('list')
          .children()
          .should('have.length', 3)
          .find(':checkbox')
          .should('not.have.checked')
          .and('have.length', 3);
      });
      cy.getBySel('todoLengthDone').contains('0');
      cy.getBySel('todoLengthAll').contains('3');
      cy.getBySel('todoLengthMessage').contains(
        '残り3個です！その調子で取り組みましょう',
      );
    });

    it('Count checked taskes in the progress bar', () => {
      cy.get('#todoInput')
        .type('これは追加カウントテスト1用の投稿です{enter}')
        .type('これは追加カウントテスト2用の投稿です{enter}');
      cy.getBySel('list').contains('これは追加カウントテスト1用の投稿です').click();
      cy.getBySel('list').contains('これは追加カウントテスト2用の投稿です').click();
      cy.getBySel('todoLengthDone').contains('2');
      cy.getBySel('todoLengthAll').contains('3');
      cy.getBySel('todoLengthMessage').contains(
        '残り1個です！その調子で取り組みましょう',
      );
    });
  });

  describe('Delete tasks', () => {
    beforeEach(() => {
      cy.get('#todoInput').type('これは追加カウントテスト1用の投稿です{enter}');
      cy.getBySel('list').contains('これは追加カウントテスト1用の投稿です').click();
    });

    it('Click button `Delete DoneItems`', () => {
      cy.getBySel('buttonDelDone').click();
      cy.getBySel('blockUpper').within(() => {
        return cy
          .getBySel('list')
          .children()
          .should('have.length', 1)
          .contains('サンプルTODO');
      });
      cy.getBySel('blockBottom').within(() => {
        return cy.getBySel('list').children().should('have.length', 1);
      });
    });

    it('Click button `Delete TodoList`', () => {
      cy.getBySel('buttonTodoClear').click();
      cy.getBySel('blockUpper').within(() => {
        return cy.getBySel('list').children().should('have.length', 0);
      });
      cy.getBySel('todoLengthNothing').contains('タスクがありません');
    });
  });
});
