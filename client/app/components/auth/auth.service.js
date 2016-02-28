class AuthService {
  constructor( stamplay ) {
    "ngInject";
    this._stamplay = stamplay;
    this._stamplay.User.currentUser();
  }

  getUser() {
    return this._stamplay.User.currentUser();
  };

  isSignedIn() {
    return this._stamplay.User.currentUser()
    .then(
      ( userObject ) => {
        if ( userObject.user === undefined ) {
          return false;
        } else {
          return true;
        }
      },
      ( error ) => {
        return false;
      }
    );
  };

  signInWith( provider ) {
    this._stamplay.User.socialLogin( provider );
  };

  signOut() {
    return this._stamplay.User.logout();
  };
};

export default AuthService;
