var app = angular.module("chirpApp",['ngRoute']);


app.controller("ChirpController",ChirpController);



app.config(function($routeProvider){

  $routeProvider
    .when("/tweets",{
      templateUrl:"templates/tweets.html",
      controller:"ChirpController",
      controllerAs: "chiprCntl"
    })
    .otherwise({
      redirectTo: "/tweets"
    })
});


function ChirpController($http){
  var vm = this;
  $http({
    method: 'GET',
    url: 'http://localhost:3000/tweets'
    }).success(function successCallback(response) {
         vm.tweets=response;
         console.log(vm.tweets);
         //console.log("uc",vm.list)
    }).error(function errorCallback(response) {
        console.log("error: ",response);
   });

}
