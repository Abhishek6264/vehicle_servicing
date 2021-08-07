// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ion-datetime-picker','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

 // star rating
.directive('starRating', function() {
    return {
      restrict : 'A',
      template : '<ul class="rating">'
           + '  <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
           + '\u2605'
           + '</li>'
           + '</ul>',
      scope : {
        ratingValue : '=',
        max : '=',
        onRatingSelected : '&'
      },
      link : function(scope, elem, attrs) {
        var updateStars = function() {
          scope.stars = [];
          for ( var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled : i < scope.ratingValue
            });
          }
        };
        
        scope.toggle = function(index) {
          scope.ratingValue = index + 1;
          scope.onRatingSelected({
            rating : index + 1
          });
        };
        
        scope.$watch('ratingValue',
          function(oldVal, newVal) {
            if (newVal) {
              updateStars();
            }
          }
        );
      }
    };
  }
)
// End of star rating 


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');

  
  if(localStorage.getItem('arr'))
    $urlRouterProvider.when('','/tab/dash');
  else 
    $urlRouterProvider.when('','/signup');
      
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js


  $stateProvider
 .state('sign', {
    url: '/signup',
    controller: 'loginController',
    templateUrl: 'templates/signup.html',
  })


  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('tab.purchasedetail', {
    url: '/purchasedetail',
    views: {
      'tab-dash': {
        templateUrl: 'templates/purchasedetail.html',
        controller: 'PurchaseDetailCtrl'
      }
    }
  })


  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'BusinessDisplayCtrlCar',
          cache:false
        }
      }
    })

  .state('tab.bike', {
      url: '/bike',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-bike.html',
          controller: 'BusinessDisplayCtrlBike'
        }
      }
    })

  .state('tab.gas', {
      url: '/gas',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-gas.html',
          controller: 'BusinessDisplayCtrlGas'
        }
      }
    })


    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'CustomerDetailCtrl'
        }
      }
    })

    .state('tab.chat-bike', {
      url: '/bike/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-bike.html',
          controller: 'CustomerDetailCtrl'
        }
      }
    })

 .state('tab.chat-gas', {
      url: '/gas/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-gas.html',
          controller: 'CustomerDetailCtrl'
        }
      }
    })    

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-account.html',
  //       controller: 'BusinessDetailCtrl'
  //     }
  //   }
  // })

  .state('account', {
    url: '/account',
    controller: 'BusinessDetailCtrl',
    templateUrl: 'templates/account.html',
  })




// new 
  .state('appointmenstlist', {
    url: '/appointmenstlist',
    controller: 'AppointmenstlistCtrl',
    templateUrl: 'templates/appointmenstlist.html',
  })

  // .state('tab.appointmenstlist', {
  //   url: '/appointmenstlist',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/appointmenstlist.html',
  //       controller: 'AppointmenstlistCtrl'
  //     }
  //   }
  // })

//
  .state('tab.display',{
    url:'/display',
    views:{
       'tab-display':{
      templateUrl:'templates/tab-display.html',
      controller: 'ItemCtrl'
        }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

// $urlRouterProvider.when('','tab/display');

});


