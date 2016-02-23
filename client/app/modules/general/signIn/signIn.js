import angular from "angular";
import uiRouter from "angular-ui-router";
import signInComponent from "./signIn.component";

let signInModule = angular.module( "signIn", [
  uiRouter
] )

.component( "signIn", signInComponent );

export default signInModule;
