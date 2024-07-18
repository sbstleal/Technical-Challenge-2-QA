import { checkoutElements } from "./checkoutElements";

class CheckoutTasks {
  fillInFirstName(firstName) {
    cy.get(checkoutElements.inputFirstName).type(firstName);
  }

  fillInLastName(lastName) {
    cy.get(checkoutElements.inputLastName).type(lastName);
  }

  fillInPostalCode(postalCode) {
    cy.get(checkoutElements.inputPostalCode).type(postalCode);
  }

  clickContinueButton() {
    cy.get(checkoutElements.buttonContinue).click();
  }

  clickFinishButton() {
    cy.get(checkoutElements.buttonFinish).click();
  }

  fillInDetailsAndContinue(firstName, lastName, postalCode) {
    this.fillInFirstName(firstName);
    this.fillInLastName(lastName);
    this.fillInPostalCode(postalCode);
    this.clickContinueButton();
  }
}

export default new CheckoutTasks();