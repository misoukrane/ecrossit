import angular from "angular";
import Dashboard from "./dashboard/dashboard";
import Navbar from "./jobSeekerNavbar/jobSeekerNavbar";
import "./jobSeeker.styl";

let componentModule = angular.module( "app.jobSeeker", [
  Dashboard.name,
  Navbar.name
] )
.config( ( $stateProvider ) => {
  "ngInject";

  $stateProvider
    .state( "jobSeeker", {
      views:{
        "navbar": {
          template: "<job-seeker-navbar></job-seeker-navbar>"
       },
        "footer": {
          templateUrl: "app/modules/general/footer.html"
        }
      },
      onEnter: ( $state, $rootScope, auth ) => {
        "ngInject";
        auth.isSignedIn()
          .then( ( signedIn ) => {
            if ( !signedIn ) {
              $state.go( "signin" );
            } else {
              $rootScope.$broadcast( "event:Module", "JOBSEEKER" );
            }
          } );
        }
    } );
} );

export default componentModule;
