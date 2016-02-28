import angular from "angular";
import uiRouter from "angular-ui-router";
import dashboardComponent from "./dashboard.component";

let dashboardModule = angular.module( "dashboard", [
  uiRouter
] )

.component( "dashboard", dashboardComponent )
.config( ( $stateProvider ) => {
  "ngInject";
  $stateProvider
    .state( "dashboard", {
      parent: "jobSeeker",
      url: "/dashboard",
      views:{
        "main@": {
          template: "<dashboard></dashboard>"
        }
      }
    } );
} );


export default dashboardModule;
