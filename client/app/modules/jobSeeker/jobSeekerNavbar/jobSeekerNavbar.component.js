import template from "./jobSeekerNavbar.html";
import controller from "./jobSeekerNavbar.controller";
import "./jobSeekerNavbar.styl";

let jobSeekerNavbarComponent = {
  restrict: "E",
  bindings: {},
  template,
  controller,
  controllerAs: "vm"
};

export default jobSeekerNavbarComponent;
