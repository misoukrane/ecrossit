import angular from 'angular';
import General from './general/general';

let modules = angular.module('app.modules', [
  General.name,
]);

export default modules;
