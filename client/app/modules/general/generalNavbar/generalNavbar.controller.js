class GeneralNavbarController {
  constructor( $mdSidenav, $mdMedia ) {
    "ngInject";
    this.$sideNav = $mdSidenav;
    this.$mdMedia = $mdMedia;
  }

  toggleSideNav() {
    this.$sideNav( "left" ).toggle();
  }
}

export default GeneralNavbarController;
