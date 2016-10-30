angular.module('app.controllers', ['firebase'])
  
.controller('homePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('newChallengePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('challengeTypePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', '$firebaseAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseAuth, $state) {
    var auth = $firebaseAuth();
    $scope.loginInfo = {email: '',
                        password: ''};
    $scope.signIn = function() {
        console.log($scope.loginInfo.email);
        console.log($scope.loginInfo.password);
      $scope.firebaseUser = null;
      $scope.error = null;

      auth.$signInWithEmailAndPassword($scope.loginInfo.email, $scope.loginInfo.password).then(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
        console.log(firebaseUser);
            $state.go('homePage');
      }).catch(function(error) {
        $scope.error = error;
        console.log(error);
      });
    };
}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$state', '$firebaseAuth',
function ($scope, $stateParams, $state, $firebaseAuth) {
    $scope.signUpInfo = {email: '',
                        password: ''};
    var Auth = $firebaseAuth();
     // Create a new user
     $scope.signUp = function() {
      Auth.$createUserWithEmailAndPassword($scope.signUpInfo.email, $scope.signUpInfo.password)
        .then(function(firebaseUser) {
          $scope.message = "User created with uid: " + firebaseUser.uid;
          $state.go('homePage');
        }).catch(function(error) {
          $scope.error = error;
          console.log(error);
        });
    }
}])
   
.controller('meetChallengerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mapRouteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('runHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('yourChallengesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('friendsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 