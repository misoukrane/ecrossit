import angular from "angular";
import material from "angular-material";
import uiRouter from "angular-ui-router";
import components from "./components/components";
import modules from "./modules/modules";
import AppComponent from "./app.component";
import "normalize.css";
import "angular-material/angular-material.css";
import "./commonStyles/common.styl";

angular.module( "app", [
    uiRouter,
    material,
    components.name,
    modules.name
  ] )
  .config( ( $locationProvider, $mdThemingProvider ) => {
    "ngInject";
    $locationProvider.html5Mode( true ).hashPrefix( "!" );

    // Configure theme
    $mdThemingProvider.theme( "default" )
      .primaryPalette( "pink" )
      .accentPalette( "green" )
      .dark();
  } )
  .component( "app", AppComponent );
