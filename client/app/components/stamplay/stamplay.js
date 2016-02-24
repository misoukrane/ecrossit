import angular from "angular";

let stamplayModule = angular.module( "stamplay", [] )

.factory( "Stamplay", function( $window ) {
  "ngInject";
  $window.Stamplay.init( "ecrossit" );
  return $window.Stamplay;
} );

export default stamplayModule;
