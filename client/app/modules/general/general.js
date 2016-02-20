import angular from "angular";
import About from "./about/about";
import Navbar from "./generalNavbar/generalNavbar";
import Home from "./home/home";
import "./general.styl";

let componentModule = angular.module( "app.general", [
  Home.name,
  About.name,
  Navbar.name
] )
.config( ( $stateProvider, $urlRouterProvider ) => {
  "ngInject";

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "general", {
      views:{
        "navbar": {
          template: "<general-navbar></general-navbar>"
       },
        "footer": {
          templateUrl: "app/modules/general/footer.html"
        }
      }
    } );
} );

export default componentModule;
