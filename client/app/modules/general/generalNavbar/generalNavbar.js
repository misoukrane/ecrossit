import angular from "angular";
import material from "angular-material";
import uiRouter from "angular-ui-router";
import generalNavbarComponent from "./generalNavbar.component";

let generalNavbarModule = angular.module( "generalNavbar", [
  uiRouter,
  material
] )

.component( "generalNavbar", generalNavbarComponent );

export default generalNavbarModule;
