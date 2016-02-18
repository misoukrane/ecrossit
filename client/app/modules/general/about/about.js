import angular from "angular";
import uiRouter from "angular-ui-router";
import aboutComponent from "./about.component";

let aboutModule = angular.module( "about", [
  uiRouter
] )
.config( ( $stateProvider ) => {
  "ngInject";
  $stateProvider
    .state( "about", {
      parent: "general",
      url: "/about",
      views:{
        "main@": {
          template: "about"
        }
      }
    } );
} )
.component( "about", aboutComponent );

export default aboutModule;
