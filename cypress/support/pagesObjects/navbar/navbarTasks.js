import { navbarElements } from "./navbarElements";

class NavbarTasks {
  clickCart() {
    cy.get(navbarElements.selectCart).click();
  }

  clickAllItems() {
    cy.get(navbarElements.selectAllItems).click();
  }

  clickAbout() {
    cy.get(navbarElements.selectAbout).click();
  }

  clickLogout() {
    cy.get(navbarElements.selectLogout).click();
  }

  clickReset() {
    cy.get(navbarElements.selectResetApp).click();
  }

  clickMenu() {
    cy.get(navbarElements.selectMenu).click();
  }
}

export default new NavbarTasks();
