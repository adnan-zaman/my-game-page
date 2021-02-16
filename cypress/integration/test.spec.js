describe("my first test", function () {
  it("should return true", function () {
    cy.visit("/");
    cy.get("#form-field-Email-login-form").type("test@abc.com");
    cy.screenshot();
  });
});
