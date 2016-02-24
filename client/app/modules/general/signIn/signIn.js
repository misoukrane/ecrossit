import angular from "angular";
import uiRouter from "angular-ui-router";
import signInComponent from "./signIn.component";

let signInModule = angular.module( "signIn", [
  uiRouter
] )

.component( "signIn", signInComponent )
.config( ( $stateProvider ) => {
  "ngInject";
  $stateProvider
    .state( "signin", {
      parent: "general",
      url: "/sign-in",
      views:{
        "main@": {
          template: "<sign-in></sign-in>"
        }
      }
    } );
} );

export default signInModule;
