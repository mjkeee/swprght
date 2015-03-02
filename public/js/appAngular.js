var app = angular.module('iSalveo',['ngRoute','ngAria','ngAnimate','ngMessages','appControllers']);
app.config(function ($routeProvider){
  $routeProvider.
  when('/',{
  	templateUrl:'partials/search.ejs',
    controller: 'SwipeController'}).
  when('/forum',{
  	templateUrl:'partials/forum.ejs'}).
  when('/devices', {
  templateUrl:'partials/devices.ejs'}).
  when('/ihealth',{
  	templateUrl:'partials/ihealth.ejs'}).
  when('/information',{
  	templateUrl:'partials/information.ejs'}).
  when('/contact', {
  templateUrl:'partials/contact.ejs'}).
  when('/about',{
  	templateUrl:'partials/about.ejs'}).
    when('/signin',{
    templateUrl:'partials/signin.ejs'}).
  when('/signup', {
  templateUrl:'partials/signup.ejs',
   controller:'SignUpController'}).
 
  otherwise({
  	redirectTo:'/', template:'partials/search.ejs'})
});

