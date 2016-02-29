import template from "./generalNavbar.html";
import controller from "./generalNavbar.controller";
import "./generalNavbar.styl";

let generalNavbarComponent = {
  restrict: "E",
  bindings: {},
  template,
  controller,
  controllerAs: "vm"
};

export default generalNavbarComponent;
