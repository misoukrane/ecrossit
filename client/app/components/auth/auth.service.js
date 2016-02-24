let AuthService = function( Stamplay ) {
  "ngInject";
  const stamplay = Stamplay;

  let getUser = () => {
    return stamplay.User.currentUser();
  };

  let signInWith = ( provider ) => {
    stamplay.User.socialLogin( provider );
  };

  return { getUser, signInWith };
};

export default AuthService;
