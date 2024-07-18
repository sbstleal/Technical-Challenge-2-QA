import { productElements } from "./productElements";

class ProductValidations {
  productSortedByNameAscending() {
    cy.get(productElements.selectItem)
      .first()
      .should("contain", "Sauce Labs Backpack");
  }

  productSortedByNameDescending() {
    cy.get(productElements.selectItem)
      .first()
      .should("contain", "Test.allTheThings() T-Shirt (Red)");
  }

  productSortedByPriceAscending() {
    cy.get(productElements.selectItem)
      .first()
      .should("contain", "Sauce Labs Onesie");
  }

  productSortedByPriceDescending() {
    cy.get(productElements.selectItem)
      .first()
      .should("contain", "Sauce Labs Fleece Jacket");
  }
}

export default new ProductValidations();
