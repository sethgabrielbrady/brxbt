(function() {
  'use strict';

  angular.module('brxbt', ['ui.router'])
  .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider){

  $urlRouterProvider.when('', '/');

  $stateProvider
  .state({
        name: 'home',
        url: '/',
        templateUrl: '/templates/home.template.html',
      })
  .state({
        name: 'about',
        url: '/about',
        templateUrl: '/templates/about.template.html',
      });
    }
}());
