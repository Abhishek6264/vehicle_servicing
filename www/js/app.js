// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ion-datetime-picker'])

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

//   $http.get("http://ontouch.co.in/app_check_device_id.php?did=123")
// .then(function (response) {$scope.records = response.data.records;
            // $scope.$evalAsync(function() {
            // var device = $cordovaDevice.getDevice();
            // //$scope.manufacturer = device.manufacturer;
            // //$scope.model = device.model;
            // //$scope.platform = device.platform;
            // $scope.uuid = device.uuid;
            // });
           // console.log($scope.records.Matched);
  // localStorage.setItem('mobile', JSON.stringify('79797979'));
  // console.log(localStorage.getItem('mobile'));
  // if(localStorage.getItem('arr')) 
  //   $urlRouterProvider.when('','/tab/dash');
  // else 
  //   $urlRouterProvider.when('','/signup'); 

 })

  

//Input Field pattern
 .directive('focusAfter', function() {
    return {
      restrict: 'A',
      scope: {
        elemToFocus: '@'
      },
      link: function(scope, elem, attrs) {
        var elementToFocus = document.getElementById(scope.elemToFocus);
        elem.on('keyup', function() {
          if(elem.val().length ===2) {
            window.setTimeout(function() {
              elementToFocus.focus();
            });
            
          }
        });
      }
    };
  })



//  Star Rating  to rate the Services.
 
// .directive('starRating', function() {
//    return {
//      restrict : 'A',
//      template : '<ul class="rating">'
//           + '  <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
//           + '\u2605'
//           + '</li>'
//           + '</ul>',
//      scope : {
//        ratingValue : '=',
//        max : '=',
//        onRatingSelected : '&'
//      },
//      link : function(scope, elem, attrs) {
//        var updateStars = function() {
//          scope.stars = [];
//          for ( var i = 0; i < scope.max; i++) {
//            scope.stars.push({
//              filled : i < scope.ratingValue
//            });
//          }
//        };
       
//        scope.toggle = function(index) {
//          scope.ratingValue = index + 1;
//          scope.onRatingSelected({
//            rating : index + 1
//          });
//        };
       
//        scope.$watch('ratingValue',
//          function(oldVal, newVal) {
//            if (newVal) {
//              updateStars();
//            }
//          }
//        );
//      }
//    };
//  }
// )

// 
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.views.maxCache(0);

  // if(JSON.parse(localStorage.getItem('list')) > 0)
  //   $urlRouterProvider.when('','/appointmenstlist');
  // else 
  //   $urlRouterProvider.when('','/login'); 

  // if(localStorage.getItem('arr')) 
  //   $urlRouterProvider.when('','/tab/dash');
  // else 
  //   $urlRouterProvider.when('','/login'); 


         if(JSON.parse(localStorage.getItem('cmatch'))==null && JSON.parse(localStorage.getItem('bmatch'))==null ){
            // $urlRouterProvider.when('','login');
            if(localStorage.getItem('arr')) 
              $urlRouterProvider.when('','/tab/dash');
            else 
              $urlRouterProvider.when('','/login'); 
                      console.log('one');
         }
         else if(localStorage.getItem('arr')!=null){
          $urlRouterProvider.when('','tab/dash');
          //console.log('Two');
         }
         else if(JSON.parse(localStorage.getItem('cmatch'))!=null && JSON.parse(localStorage.getItem('bmatch')) > 0){
         $urlRouterProvider.when('','appointmenstlist');
        // console.log('three');
         }



  

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
          controller: 'BusinessDisplayCtrlCar'
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
          controller: 'MedicineDetailCtrl'
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

  .state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'templates/login.html',
  })

  .state('account', {
    url: '/account',
    controller: 'BusinessDetailCtrl',
    templateUrl: 'templates/account.html',
  })

 .state('aboutus', {
    url: '/aboutus',
    controller: 'AboutusCtrl',
    templateUrl: 'templates/aboutus.html',
  })

 
  .state('appointmenstlist', {
    url: '/appointmenstlist',
    controller: 'AppointmenstlistCtrl',
    templateUrl: 'templates/appointmenstlist.html',
  })

  //  .state('tab.appointmenstlist', {
  //   url: '/appointmenstlist',
  //   views: {
  //     'tab-appointmenstlist': {
  //       templateUrl: 'templates/tab-appointmenstlist.html',
  //       controller: 'AppointmenstlistCtrl'
  //     }
  //   }
  // })

// .state('tab.usersratinglist', {
//     url: '/usersratinglist',
//     views: {
//       'tab-usersratinglist': {
//         templateUrl: 'templates/tab-usersratinglist.html',
//         controller: 'UsersratinglistCtrl'
//       }
//     }
//   })


   .state('usersratinglist', {
    url: '/usersratinglist',
    controller: 'UsersratinglistCtrl',
    templateUrl: 'templates/usersratinglist.html',
  })

  // .state('medicineslist', {
  //   url: '/medicineslist',
  //   controller: 'MedicineslistCtrl',
  //   templateUrl: 'templates/medicineslist.html',
  // })

  .state('generalrating', {
    url: '/generalrating',
    controller: 'GeneralRatingCtrl',
    templateUrl: 'templates/generalrating.html',
  })

  .state('sadangry', {
    url: '/sadangry',
    controller: 'SadAngryCtrl',
    templateUrl: 'templates/sadangry.html',
  })

  // .state('tab.generalrating', {
  //   url: '/generalrating',
  //   views: {
  //     'tab-generalrating': {
  //       templateUrl: 'templates/tab-generalrating.html',
  //       controller: 'GeneralRatingCtrl'
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
  // $urlRouterProvider.otherwise('/signup');

// $urlRouterProvider.when('','tab/display');



})
