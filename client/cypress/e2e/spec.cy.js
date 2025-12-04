describe('template spec', () => {
  it("Loads the home page and navigates to Projects", () => {
    cy.visit("/");

    cy.contains("Welcome Home").should("be.visible");

    cy.contains("Projects").click();
    cy.url().should("include", "/Projects");
    cy.contains("Projects").should("be.visible");
  });
});
