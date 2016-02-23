let AuthService = function( Stamplay ) {
  "ngInject";
  const stamplay = Stamplay;
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let signInWith = ( provider ) => {
    stamplay.User.socialLogin( provider );
  };

  return { getUser, signInWith, isSignedIn };
};

export default AuthService;
