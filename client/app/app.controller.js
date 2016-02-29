class AppController {
  constructor($rootScope) {
    'ngInject';
    this.materialTheme = 'generalTheme';
    var _self = this;
    $rootScope.$on('event:Module', (e, opt) => {
      if (opt === 'GENERAL') {
        _self.materialTheme = 'generalTheme';
        _self.generalContentClass = 'content-wrapper';
      } else if (opt === 'JOBSEEKER') {
        _self.materialTheme = 'jobSeekerTheme';
        _self.generalContentClass = '';
      } else {
        _self.materialTheme = 'generalTheme';
        _self.generalContentClass = '';
      }
      console.log($rootScope.$$phase);
      if (!$rootScope.$$phase) {
        $rootScope.$apply();
      }
    });
    this.generalContentClass = 'content-wrapper';
  }
}

export default AppController;
