import angular from 'angular';
import GetService from './GetService';

let getModule = angular.module('angularGetJs', []);

getModule.factory('get', GetService);

export default getModule.name;
