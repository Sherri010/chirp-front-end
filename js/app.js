var app = angular.module("chirpApp",['ngRoute']);



app.config(function($routeProvider){

  $routeProvider
    .when("/tweets",{
      templateUrl:"templates/tweets.html",
      controller:"ChirpController",
      controllerAs: "chiprCntl"
    })
    .when("/login",{
      templateUrl:"templates/login.html",
      controller:"loginController",
      controllerAs: "loginCtrl"
    })
    .otherwise({
      redirectTo: "/tweets"
    })
});

app.controller("ChirpController",ChirpController);


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

app.controller("loginController",function($http,$location){
var vm=this;
  vm.login = function(event){
     event.preventDefault();

     $http({
       method:"POST",
       url:"http://localhost:3000/users/sign_in",
       data:vm.user
     }).success(function(user){
        // AuthService.setSession(user);
         $location.path("/users");
       console.log(user)
       }).error(function(){
        alert("Unauth");
     })
  }

});
// //
// //
// // app.service("AuthService",function($location){
// //   this.setSession = function(user){
// //     localStorage.setItem("current_user", JSON.stringify(user));
// //   }
// //
// //   this.getToken = function(){
// //     var current_user = JSON.parse(localStorage.getItem("current_user"));
// //     return current_user.auth_token;
// //   }
// //
// //   this.currentUser = function (){
// //     return JSON.parse(localStorage.getItem("current_user"));
// //   }
// //
// //   this.isAuthenticated = function(){
// //     if (this.currentUser()){
// //       return;
// //     }else {
// //       $location.path("/login");
// //     }
// //   }
// // });
