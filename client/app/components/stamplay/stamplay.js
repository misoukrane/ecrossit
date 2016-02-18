import angular from 'angular';
import stamplay from 'stamplay';

let stamplayModule = angular.module('stamplay', [])

.factory('Stamplay', function() {
  return new stamplay('ecrossit', 'ad76c726d530ecb55ad625060c762151b8cc8def3ad5fe85fc45ba519cdbc8e7', 1);
});

export default stamplayModule;
