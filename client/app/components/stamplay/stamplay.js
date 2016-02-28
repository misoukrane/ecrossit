import angular from "angular";

let stamplayModule = angular.module( "app.components.stamplay", [] )

.factory( "stamplay", function( $window ) {
  "ngInject";
  $window.Stamplay.init( "ecrossit" );
  return $window.Stamplay;
} );

export default stamplayModule;
