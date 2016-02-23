class SignInController {
  constructor( Auth ) {
    "ngInject";
    this.authenticationService = Auth;
  }

  signInWith( provider ) {
    this.authenticationService.signInWith( provider );
  }
}

export default SignInController;
