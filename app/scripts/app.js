'use strict';

/**
 * @ngdoc overview
 * @name employeeManagementApp
 * @description
 * # employeeManagementApp
 *
 * Main module of the application.
 */
angular
  .module('employeeManagementApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/addEmployee', {
        templateUrl: 'views/addEmployee.html',
       controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
