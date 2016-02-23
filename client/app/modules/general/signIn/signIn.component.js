import template from "./signIn.html";
import controller from "./signIn.controller";
import "./signIn.styl";

let signInComponent = {
  restrict: "E",
  bindings: {},
  template,
  controller,
  controllerAs: "signInCtrl"
};

export default signInComponent;
