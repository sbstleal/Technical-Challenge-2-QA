import loginTasks from "../../support/pagesObjects/login/loginTasks";
import loginValidations from "../../support/pagesObjects/login/loginValidations";

describe("Login", () => {
  it("CT01 - Should successfully log in with valid credentials.", () => {
    loginTasks.performLogin("user", "password");
    loginValidations.successfulLogin();
  });

  context(
    "CT02 - Should display an error message when invalid login credentials are entered.",
    () => {
      it("Should display an error for an invalid 'username'", () => {
        loginTasks.performLogin("invalidUser", "password");
        loginValidations.incorrectLogin();
      });

      it("Should display an error for an invalid 'password'", () => {
        loginTasks.performLogin("user", "invalidPassword");
        loginValidations.incorrectLogin();
      });
    }
  );

  context(
    "CT03 - Should display an error when trying to log in with empty fields.",
    () => {
      it("Should display an error when attempting to log in with an empty 'username'.", () => {
        loginTasks.tryLoginWithoutUsername("password");
        loginValidations.usernameRequired();
      });

      it("Should display an error when attempting to log in with an empty 'password'.", () => {
        loginTasks.tryLoginWithoutPassword("user");
        loginValidations.passwordRequired();
      });
    }
  );
});
