angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homePage', {
    url: '/home',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('newChallengePage', {
    url: '/newChallenge',
    templateUrl: 'templates/newChallengePage.html',
    controller: 'newChallengePageCtrl'
  })

  .state('challengeTypePage', {
    url: '/challengeType',
    templateUrl: 'templates/challengeTypePage.html',
    controller: 'challengeTypePageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('meetChallenger', {
    url: '/meetChallenger',
    templateUrl: 'templates/meetChallenger.html',
    controller: 'meetChallengerCtrl'
  })

  .state('mapRoute', {
    url: '/mapRoute',
    templateUrl: 'templates/mapRoute.html',
    controller: 'mapRouteCtrl'
  })

  .state('runHistory', {
    url: '/runHistory',
    templateUrl: 'templates/runHistory.html',
    controller: 'runHistoryCtrl'
  })

  .state('yourChallenges', {
    url: '/yourChallenges',
    templateUrl: 'templates/yourChallenges.html',
    controller: 'yourChallengesCtrl'
  })

  .state('friends', {
    url: '/friends',
    templateUrl: 'templates/friends.html',
    controller: 'friendsCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});