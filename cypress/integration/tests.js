beforeEach(() => {
  cy.task("resetDb");
});

describe("check homepage link ", () => {
  it("can go to home page", () => {
    cy.visit("/");
  });
});

describe("check navigation links ", () => {
  it("can go to home page", () => {
    cy.visit("/");
    cy.contains("Sign up").click();
    cy.contains("Back to Homepage").click();
  });
});
