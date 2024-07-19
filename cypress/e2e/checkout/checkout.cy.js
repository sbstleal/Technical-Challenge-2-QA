import loginTasks from "../../support/pagesObjects/login/loginTasks";
import productTasks from "../../support/pagesObjects/products/productTasks";
import navbarTasks from "../../support/pagesObjects/navbar/navbarTasks";
import cartTasks from "../../support/pagesObjects/cart/cartTasks";
import checkoutTasks from "../../support/pagesObjects/checkout/checkoutTasks";
import checkoutData from "../../fixtures/checkoutData.json";
import checkoutValidations from "../../support/pagesObjects/checkout/checkoutValidations";

describe("Checkout", () => {
  beforeEach(() => {
    loginTasks.performLogin("user", "password");
    productTasks.addBikeToCart();
    navbarTasks.clickCart();
    cartTasks.clickCheckoutButton();
  });

  it("CT01 - Validate that following the correct steps results in a successful purchase.", () => {
    checkoutTasks.fillDetailsAndContinue(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );
    checkoutValidations.redirectToCheckoutOverview();
  });

  context(
    "CT02 - Validate that missing required fields in checkout shows the error message.",
    () => {
      it("Required name message", () => {
        checkoutTasks.clickContinueButton();
        checkoutValidations.requiredNameField();
      });

      it("Required last name message", () => {
        checkoutTasks.fillFirstName(checkoutData.firstName);
        checkoutTasks.clickContinueButton();
        checkoutValidations.requiredLastNameField();
      });

      it("Required postal code message", () => {
        checkoutTasks.fillFirstName(checkoutData.firstName);
        checkoutTasks.fillLastName(checkoutData.lastName);
        checkoutTasks.clickContinueButton();
        checkoutValidations.requiredPostalCodeField();
      });
    }
  );

  it("CT03 - Validate success upon completing the checkout.", () => {
    checkoutTasks.fillDetailsAndContinue(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );
    checkoutTasks.clickContinueButton();
    checkoutTasks.clickFinishButton();
    checkoutValidations.successfulCheckoutCompletion();
  });
});
