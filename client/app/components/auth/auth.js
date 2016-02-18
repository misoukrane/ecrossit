import angular from "angular";
import AuthService from "./auth.service";

let authModule = angular.module( "auth", [] )

.factory( "Auth", AuthService );

export default authModule;
