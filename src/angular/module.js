import angular from 'angular';
import GetService from './GetService';

/**
 * Angular JS service.
 */
let angularGetJs = angular.module('angularGetJs', []);

angularGetJs.factory('get', GetService);

export default angularGetJs.name;
