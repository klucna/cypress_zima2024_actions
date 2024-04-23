describe("PMTool Login Page Action Tests", () => {
  it("Title is visible", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3[class='form-title']").should("be.visible");
  });
});
