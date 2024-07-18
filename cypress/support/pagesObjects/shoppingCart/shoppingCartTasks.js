import { shoppingCartElements } from "./shoppingCartElements";

class ShoppingCartTasks {
  removeItemFromCart() {
    cy.get(shoppingCartElements.removeItemButton).click();
  }

  clickCheckoutButton() {
    cy.get(shoppingCartElements.checkoutButton).click();
  }
}

export default new ShoppingCartTasks();
