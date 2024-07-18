import { shoppingCartElements } from "./shoppingCartElements";

class ShoppingCartValidations {
  itemRemoved() {
    cy.get(shoppingCartElements.cartItem).should("not.exist");
  }
}

export default new ShoppingCartValidations();
