import { productElements } from "./productElements";

class ProductTasks {
  addBackpackToCart() {
    cy.get(productElements.selectBackpackItem).click();
  }

  addBikeToCart() {
    cy.get(productElements.selectBikeItem).click();
  }

  removeBackpackFromCart() {
    cy.get(productElements.removeBackpackItem).click();
  }

  addItemsToCart() {
    this.addBackpackToCart();
    this.addBikeToCart();
  }
}

export default new ProductTasks();
