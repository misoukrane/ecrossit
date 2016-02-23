import angular from "angular";

let stamplayModule = angular.module( "stamplay", [] )

.factory( "Stamplay", function( $window ) {
  "ngInject";
  $window.Stamplay.init( "ad76c726d530ecb55ad625060c762151b8cc8def3ad5fe85fc45ba519cdbc8e7" );
  return $window.Stamplay;
} );

export default stamplayModule;
