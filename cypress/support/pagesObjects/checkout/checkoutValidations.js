import { checkoutElements } from "./checkoutElements";

class CheckoutValidations {
  checkoutOverviewRedirection() {
    cy.get(checkoutElements.pageTitle)
      .contains("Checkout: Overview")
      .should("be.visible");
  }

  successfulCheckoutComplete() {
    cy.get(checkoutElements.pageTitle)
      .contains("Checkout: Complete")
      .should("be.visible");
    cy.get(checkoutElements.successOrderMessage)
      .contains("Thank you for your order!")
      .should("be.visible");
  }

  firstNameRequiredField() {
    cy.get(checkoutElements.requiredFieldErrorMessage)
      .contains("Error: First Name is required")
      .should("be.visible");
  }

  lastNameRequiredField() {
    cy.get(checkoutElements.requiredFieldErrorMessage)
      .contains("Error: Last Name is required")
      .should("be.visible");
  }

  postalCodeRequiredField() {
    cy.get(checkoutElements.requiredFieldErrorMessage)
      .contains("Error: Postal Code is required")
      .should("be.visible");
  }
}

export default new CheckoutValidations();