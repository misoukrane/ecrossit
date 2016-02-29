import angular from 'angular';
import material from 'angular-material';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import modules from './modules/modules';
import AppComponent from './app.component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import './commonStyles/common.styl';

angular.module('app', [
  uiRouter,
  material,
  components.name,
  modules.name
])
  .config(($locationProvider, $mdThemingProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true).hashPrefix('!');

    // Configure themes
    $mdThemingProvider.theme('generalTheme')
      .primaryPalette('pink')
      .accentPalette('green')
      .dark();

    $mdThemingProvider.theme('jobSeekerTheme')
      .primaryPalette('indigo')
      .accentPalette('green');
    $mdThemingProvider.setDefaultTheme('generalTheme');
    // Always watch for theme changes.
    $mdThemingProvider.alwaysWatchTheme(true);
  })
  .run(($rootScope) => {
    'ngInject';
  })
  .component('app', AppComponent);
