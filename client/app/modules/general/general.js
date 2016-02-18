import angular from 'angular';
import Home from './home/home';
import About from './about/about';

let componentModule = angular.module('app.general', [
  Home.name,
  About.name
] )
.config( ( $stateProvider, $urlRouterProvider ) => {
  "ngInject";

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "general", {
      views:{
        "navbar": {
          template: "navbar"
       },
        "footer": {
          template: "footer"
        }
      }
    } );
} );

export default componentModule;
