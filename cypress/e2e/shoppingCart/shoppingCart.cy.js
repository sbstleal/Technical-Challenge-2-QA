import loginTasks from "../../support/pagesObjects/login/loginTasks";
import navbarValidations from "../../support/pagesObjects/navbar/navbarValidations";
import productTasks from "../../support/pagesObjects/products/productTasks";
import navbarTasks from "../../support/pagesObjects/navbar/navbarTasks";
import cartTasks from "../../support/pagesObjects/cart/cartTasks";
import cartValidations from "../../support/pagesObjects/cart/cartValidations";

describe("Cart", () => {
  beforeEach(() => {
    loginTasks.performLogin("user", "password");
  });

  it("CT01 - Validate that clicking 'Add to Cart' adds the product to the cart.", () => {
    productTasks.addBikeToCart();
    navbarValidations.cartContainsItem();
  });

  it("CT02 - Validate that clicking 'Remove' removes the product from the cart.", () => {
    productTasks.addBackpackToCart();
    productTasks.removeBackpackFromCart();
    navbarValidations.cartIsEmpty();
  });

  it("CT03 - Validate that clicking 'Remove' removes the product from the listing.", () => {
    productTasks.addBikeToCart();
    navbarTasks.clickCart();
    cartTasks.removeCartItem();
    cartValidations.itemRemoved();
  });
});
