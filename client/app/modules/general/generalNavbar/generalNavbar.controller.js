class GeneralNavbarController {
  constructor( $scope, $mdSidenav, $mdMedia, auth ) {
    "ngInject";
    this.auth = auth;
    this.$sideNav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.signedIn = false;
    auth.isSignedIn()
      .then( ( signedIn ) => {
        this.signedIn = signedIn;
        $scope.$apply();
      } );
  }

  toggleSideNav() {
    this.$sideNav( "left" ).toggle();
  }
}

export default GeneralNavbarController;
