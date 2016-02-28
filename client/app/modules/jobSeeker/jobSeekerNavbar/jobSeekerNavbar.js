import angular from "angular";
import uiRouter from "angular-ui-router";
import jobSeekerNavbarComponent from "./jobSeekerNavbar.component";

let jobSeekerNavbarModule = angular.module( "jobSeekerNavbar", [
  uiRouter
] )

.component( "jobSeekerNavbar", jobSeekerNavbarComponent );

export default jobSeekerNavbarModule;
