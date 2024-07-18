import { loginElements } from "./loginElements";

class LoginTasks {
  visitLoginPage() {
    cy.visit("/");
  }

  fillPassword(password) {
    cy.get(loginElements.passwordInput).type(Cypress.env(password));
  }

  fillUsername(username) {
    cy.get(loginElements.usernameInput).type(Cypress.env(username));
  }

  clickLoginButton() {
    cy.get(loginElements.loginButton).click();
  }

  performLogin(username, password) {
    this.visitLoginPage();
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLoginButton();
  }

  tryLoginWithoutUsername(password) {
    this.visitLoginPage();
    this.fillPassword(password);
    this.clickLoginButton();
  }

  tryLoginWithoutPassword(username) {
    this.visitLoginPage();
    this.fillUsername(username);
    this.clickLoginButton();
  }
}

export default new LoginTasks();