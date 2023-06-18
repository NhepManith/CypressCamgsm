describe("Login", () => {
  it("Pass", () => {
    cy.visit("https://www.camgsm.com.kh/home/#/sign-in");
    cy.get("#userName").first(1).type("nmanith").wait(5000);
    cy.get(
      "div.md\\:flex.md\\:items-center.md\\:justify-end.w-full.sm\\:w-auto.md\\:h-full.md\\:w-1\\/2.py-8.px-4.sm\\:p-12.md\\:p-16.sm\\:rounded-2xl.md\\:rounded-none.sm\\:shadow.md\\:shadow-none.sm\\:bg-card.ng-tns-c111-1"
    )
      .first(1)
      .type("N@093286007")
      .wait(5000);

    cy.get(".mat-focus-indicator").eq(3).click().wait(5000);
    cy.get(".mat-tab-label-content").eq(1).click().wait(5000);
    cy.get(".relative").eq(27).click().wait(5000);
    cy.get(".dropdown-toggle").eq(1).click().wait(5000);
    cy.get(".dropdown-menu").eq(1).click().wait(5000);
    cy.get("#BtnSubmit").eq(0).click().wait(5000);
    cy.get("#from_date").eq(0).click().wait(5000);
    cy.get(".day").eq(0).eq(0).click({ force: true }).wait(5000);
    cy.get("#BtnSubmit").eq(0).click().wait(5000);
    cy.get("#BtnExport").eq(0).click().wait(5000);
  });
});
