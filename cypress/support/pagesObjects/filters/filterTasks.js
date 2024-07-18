import { filterElements } from "./filterElements";

class FilterTasks {
  selectFilter(option) {
    cy.get(filterElements.selectFilter).select(option);
  }
}

export default new FilterTasks();
