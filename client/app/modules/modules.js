import angular from "angular";
import General from "./general/general";
import JobSeeker from "./jobSeeker/jobSeeker";

let modules = angular.module( "app.modules", [
  General.name,
  JobSeeker.name
] );

export default modules;
