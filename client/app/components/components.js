import angular from "angular";
import Stamplay from "./stamplay/stamplay";
import Auth from "./auth/auth";

let componentsModule = angular.module( "app.components", [
  Auth.name,
  Stamplay.name
] );

export default componentsModule;
