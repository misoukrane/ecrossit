import angular from "angular";
import About from "./about/about";
import Home from "./home/home";
import Navbar from "./generalNavbar/generalNavbar";
import SignIn from "./signIn/signIn";
import "./general.styl";

let componentModule = angular.module( "app.general", [
  Home.name,
  About.name,
  Navbar.name,
  SignIn.name
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
