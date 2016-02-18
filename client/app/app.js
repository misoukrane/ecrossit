import angular from "angular";
import uiRouter from "angular-ui-router";
import components from "./components/components";
import modules from "./modules/modules";
import AppComponent from "./app.component";
import "normalize.css";

angular.module( "app", [
    uiRouter,
    components.name,
    modules.name
  ] )
  .config( ( $locationProvider ) => {
    "ngInject";
    $locationProvider.html5Mode( true ).hashPrefix( "!" );
  } )
  .component( "app", AppComponent );
