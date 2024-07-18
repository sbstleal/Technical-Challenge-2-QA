import { productElements } from "../products/productElements";
import { loginElements } from "./loginElements";

class LoginValidations {
  successfulLogin() {
    cy.get(productElements.pageTitleProducts)
      .contains("Products")
      .should("be.visible");
  }

  incorrectLogin() {
    cy.get(loginElements.incorrectLoginMessage)
      .contains(
        "Epic sadface: Username and password do not match any user in this service"
      )
      .should("be.visible");
  }

  usernameRequired() {
    cy.get(loginElements.incorrectLoginMessage)
      .contains("Epic sadface: Username is required")
      .should("be.visible");
  }

  passwordRequired() {
    cy.get(loginElements.incorrectLoginMessage)
      .contains("Epic sadface: Password is required")
      .should("be.visible");
  }
}

export default new LoginValidations();
