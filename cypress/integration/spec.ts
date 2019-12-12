it('Can navigate to Account page', () => {
  cy.task("logit", "from test").should("contain", "MODIFIED");
});