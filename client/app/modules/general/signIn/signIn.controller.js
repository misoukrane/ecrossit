class SignInController {
  constructor( auth ) {
    "ngInject";
    this.authenticationService = auth;
  }

  signInWith( provider ) {
    this.authenticationService.signInWith( provider );
  }
}

export default SignInController;
