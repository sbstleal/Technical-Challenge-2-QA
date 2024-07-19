import filterTasks from "../../support/pagesObjects/filters/filterTasks";
import loginTasks from "../../support/pagesObjects/login/loginTasks";
import filterOptions from "../../fixtures/filterOptions.json";
import productValidations from "../../support/pagesObjects/products/productValidations";

describe("Filters", () => {
  beforeEach(() => {
    loginTasks.performLogin("user", "password");
  });

  it("CT01 - Validate that filtering by A to Z will result in sorted items.", () => {
    filterTasks.selectFilter(filterOptions.options.nameAscending);
    productValidations.productSortedByNameAscending();
  });

  it("CT02 - Validate that filtering by Z to A will result in sorted items.", () => {
    filterTasks.selectFilter(filterOptions.options.nameDescending);
    productValidations.productSortedByNameDescending();
  });

  it("CT03 - Validate that filtering by Low to High will result in sorted items.", () => {
    filterTasks.selectFilter(filterOptions.options.priceAscending);
    productValidations.productSortedByPriceAscending();
  });

  it("CT04 - Validate that filtering by High to Low will result in sorted items.", () => {
    filterTasks.selectFilter(filterOptions.options.priceDescending);
    productValidations.productSortedByPriceDescending();
  });
});