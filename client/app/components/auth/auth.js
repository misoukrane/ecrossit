import angular from "angular";
import AuthService from "./auth.service";

let authModule = angular.module( "app.components.auth", [] )

.service( "auth", AuthService );

export default authModule;
