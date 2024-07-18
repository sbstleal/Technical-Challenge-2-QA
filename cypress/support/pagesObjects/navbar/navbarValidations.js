import { loginElements } from "../login/loginElements";
import { productElements } from "../products/productElements";
import { aboutElements } from "../about/aboutElements";
import { navbarElements } from "./navbarElements";

class NavbarValidations {
  redirectToProductsPage() {
    cy.get(productElements.pageTitle)
      .contains("Products")
      .should("be.visible");
  }

  redirectToAboutPage() {
    cy.get(aboutElements.pageTitle).should("be.visible");
  }

  redirectToLogin() {
    cy.get(loginElements.usernameInput).should("be.visible");
  }

  cartIsEmpty() {
    cy.get(navbarElements.cartItemCount).should("not.exist");
  }

  cartContainsItem() {
    cy.get(navbarElements.cartItemCount).should("contain", "1");
  }
}

export default new NavbarValidations();
