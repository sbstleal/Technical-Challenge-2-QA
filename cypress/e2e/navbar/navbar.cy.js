import navbarTasks from "../../support/pagesObjects/navbar/navbarTasks";
import navbarValidations from "../../support/pagesObjects/navbar/navbarValidations";
import loginTasks from "../../support/pagesObjects/login/loginTasks";
import productTasks from "../../support/pagesObjects/products/productTasks";

describe("Menu", () => {
  beforeEach(() => {
    loginTasks.performLogin("user", "password");
  });

  it("CT01 - Validate that clicking on All Items navigates to the products page.", () => {
    navbarTasks.clickCart();
    navbarTasks.clickMenu();
    navbarTasks.clickAllItems();
    navbarValidations.redirectToProductsPage();
  });

  it.skip("CT02 - Validate that clicking on About navigates to the Sauce Labs page.", () => {
    navbarTasks.clickMenu();
    navbarTasks.clickAbout();
    navbarValidations.redirectToAboutPage();
  });

  it("CT03 - Validate that clicking on Logout navigates to the login page.", () => {
    navbarTasks.clickMenu();
    navbarTasks.clickLogout();
    navbarValidations.redirectToLogin();
  });

  it("CT04 - Validate that clicking on reset app state empties the cart.", () => {
    productTasks.addItemsToCart();
    navbarTasks.clickMenu();
    navbarTasks.clickReset();
    navbarValidations.cartIsEmpty();
  });
});
