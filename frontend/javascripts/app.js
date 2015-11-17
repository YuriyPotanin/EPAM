var app = angular
	.module('mainModule', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: './main/main.html'
	}).
	otherwise({
		redirectTo: '/'
	});



});