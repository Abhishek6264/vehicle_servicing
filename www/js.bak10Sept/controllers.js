angular.module('starter.controllers', ["angular.filter"])
   
// login controller
.controller('loginController', function($scope, $state,$http,$ionicPlatform,$cordovaDevice){
//Auth, $ionicLoading
// url= "http://ontouch.co.in/app_business_cust_id.php?cust_mobno="+$scope.data.logcontact;
// //console.log(url);
//  $http.get(url)
//       .success(function (response) {$scope.recordlist = response.records;}); 

// Devise ID
//             $ionicPlatform.ready(function() {
//             $scope.$apply(function() {
//             var device = $cordovaDevice.getDevice();
//             // //$scope.manufacturer = device.manufacturer;
//             // //$scope.model = device.model;
//             // //$scope.platform = device.platform;
//             $scope.uuid = device.uuid;
//             });
//             });

// city drop down list

 $scope.Cities = [  
              {  
                id: '1',  
                city: 'Bengaluru/Bangalore'  
            }, {  
                id: '2',  
                city: 'Delhi'  
            }, {  
                id: '3',  
                city: 'Faridabad'  
            }, {  
                id: '4',  
                city: 'Agra'  
            }, {  
                id: '5',  
                city: 'Lucknow'  
            }, {  
                id: '7',  
                city: 'Gaziabad'  
            }, {  
                id: '8',  
                city: 'Noida'  
            }, {  
                id: '9',  
                city: 'Meruth'
            }, {  
                id: '10',  
                city: 'Hydrabad'  
            }, {  
                id: '11',  
                city: 'Chennai'  
            }, {  
                id: '12',  
                city: 'Kolkata'  
            
            }];  


        $scope.data = {};
        var arr = new Array();
           $scope.data  = {
               logname:'',
               logcontact:'',
              };

      $scope.login = function(){

         // if(localStorage.getItem('list') == "NO")
         //    $state.go('appointmenstlist');
         // else   
         //    $state.go('tab.dash');

  url="http://ontouch.co.in/app_test.php?logname="+$scope.data.logname+"&did="+$scope.uuid+"&city="+$scope.userselected.city+"&logcontact="+$scope.data.logcontact;
  //$http.get("http://ontouch.co.in/app_test.php?logname="+$scope.data.logname+"&did=23423r4df&city="+$scope.data.city+"&logcontact="+$scope.data.logcontact")
  console.log(url);
  $http.get(url)
  .then(function (response) {$scope.records = response.data.records;

 //localStorage.setItem('list', $scope.records[0].Matched); 
 localStorage.setItem('list', JSON.stringify($scope.records[0].Matched));
 //console.log($scope.records[0].Matched);
      console.log(JSON.parse(localStorage.getItem('list')));
      if(JSON.parse(localStorage.getItem('list')) == "YES")
            $state.go('appointmenstlist');
         else   
            $state.go('tab.dash'); 
          
    });    

        // var log = 'http://ontouch.co.in/app_loginapi.php';
        // $http.post(log, {logname: $scope.data.logname,
        //                  city: $scope.data.city,
        //                  logcontact: $scope.data.logcontact,
        //                  did: $scope.did
                      

        // }).then(function (res){
        //     $scope.response = res.data;
        // });
        arr.push($scope.data);
        //$scope.var = "YES";
        //localStorage.setItem('breg', JSON.stringify("NO"));
        localStorage.setItem('arr', JSON.stringify(arr));
        localStorage.setItem('city', JSON.stringify($scope.userselected.city));
        localStorage.setItem('cmobno', JSON.stringify($scope.data.logcontact));
       // alert($scope.did);
       //localStorage.setItem('list', JSON.stringify($scope.records[0].Matched)); 
      
     // console.log(JSON.parse(localStorage.getItem('list')));
       console.log($scope.userselected.city);
      // if(JSON.parse(localStorage.getItem('list')) == "YES")
      //       $state.go('appointmenstlist');
      //    else   
      //       $state.go('tab.dash');       


    }; 


// Facebook login 

   // $scope.checkLoginStatus = function() {
   //    getLoginUserStatus();
   // }

   // $scope.loginFacebook = function(userData) {
   //    loginFacebookUser();
   // };

   // $scope.facebookAPI = function() {
   //    getFacebookUserApi();
   // }

   // $scope.logoutFacebook = function() {
   //    logoutFacebookUser();
   // };

   // function loginFacebookUser() {
   //    return Auth.loginFacebook();
   // }

   // function logoutFacebookUser() {
   //    return Auth.logoutFacebook();
   // }

   // function getFacebookUserApi() {
   //    return Auth.getFacebookApi();
   // }

   // function getLoginUserStatus() {
   //    return Auth.getLoginStatus();
   // }    
 
})


//Logout Controller
.controller('logoutController', function($scope, $state,$http){
  $scope.logout =function(){
      localStorage.removeItem('arr');
      
      // $state.go('',{},{reload:true});
    }
})


// dash controller
.controller('DashCtrl', function($scope,$http,$state,$window, commonService,$location,$ionicSideMenuDelegate,$ionicPlatform,$cordovaDevice) {
$scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
       $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
        $scope.toggle = function () {
        $scope.toggleVar = !$scope.toggleVar;

        var nos = localStorage.getItem('city');
           //url="http://ontouch.co.in/cabc.php?businessmob="+city;
          // console.log(url)
         // $http.get(url)  
        //app_cust_appoint_info.php
       // $http.get("http://ontouch.co.in/app_cust_appoint_info.php")
       $http.get("http://ontouch.co.in/app_cust_appoint_info.php?cust_mobno="+$scope.cmobno)
      .success(function (response) {$scope.appointDisplay = response.records;});
       
       };


       $scope.purchaseDetaildata= function(customer){
        commonService.setSellCustomer(customer);  
        $state.go('tab.purchasedetail');   
       };


       $scope.sellItemToCustomer = function(customer){
        commonService.setSellCustomer(customer);
        $state.go('tab.display', {}, { reload: true });
       };
        
       
//    $ionicPlatform.ready(function() {
//    var element = document.getElementById('demo');

//     element.innerHTML = 'Device Model: '    + $cordovaDevice.getModel()    + '<br />' +

//     'Cordova Version: ' + $cordovaDevice.getCordova() + '<br />' +

//     'Device Platform: ' + $cordovaDevice.getPlatform() + '<br />' +

//     'Device UUID: '     + $cordovaDevice.getUUID()     + '<br />' +

//     'OS Version: ' + $cordovaDevice.getVersion() + '<br />';

// }); 
      $scope.carload = function(){
       $state.go('tab.chats',{},{reload:true});
    };
    $scope.bikeload = function(){
     $state.go('tab.bike',{},{reload:true});
    };
    $scope.otherload = function(){
     $state.go('tab.gas',{},{reload:true});
    };

 })


// PPurchase Details 
.controller('PurchaseDetailCtrl', function($scope,$ionicPopup,$state,$http,commonService) {
  $scope.sellItemToCustomer = commonService.getSellCustomer();
      var url = "http://ontouch.co.in/iteminfo.php?custid="+$scope.sellItemToCustomer.cust_id;
       // console.log(url); 
       $http.get(url)
       .success(function (response) {$scope.customerPurchaseData = response.records;});

})
 


// Car Services list controller 
.controller('BusinessDisplayCtrlCar', function($scope, $http,$window, $state,commonService,$cordovaDevice) {
       //var city1 = localStorage.getItem("city");
       var city = JSON.parse(localStorage.getItem("city"));

      console.log(city);
       
         url='http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Car';
     console.log(url);
     //console.log($scope.uuid);
      // $http.get("http://ontouch.co.in/abc.php?businessmob="+$scope.data.contact)
       //$http.get("http://ontouch.co.in/serviceCenterDisplay.php")
       //console.log('http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=car');
       $http.get('http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Car')
        

      .success(function (response) {$scope.custmerNames = response.records;});
        $scope.customerDetail = function(contactNumber){

            var data;
                for(var i = 0; i <$scope.custmerNames.length; i++){
                   if($scope.custmerNames[i].Contact === contactNumber){
                   data = $scope.custmerNames[i];
                   break;
              }
        }
        commonService.setCustomer(data)
    }
      // $route.reload();
    // $window.location.reload();
})


// Business list controller 
.controller('BusinessDisplayCtrlBike', function($scope, $http, $state,commonService) {
       //var city1 = localStorage.getItem("city");
       var city = JSON.parse(localStorage.getItem("city"));
       
         url='http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Bike';
     
      // $http.get("http://ontouch.co.in/abc.php?businessmob="+$scope.data.contact)
       //$http.get("http://ontouch.co.in/serviceCenterDisplay.php")
       //console.log('http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=bike');
       $http.get('http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Bike')
        

      .success(function (response) {$scope.custmerNames = response.records;});
        $scope.customerDetail = function(contactNumber){

            var data;
                for(var i = 0; i <$scope.custmerNames.length; i++){
                   if($scope.custmerNames[i].Contact === contactNumber){
                   data = $scope.custmerNames[i];
                   break;
              }
        }
        commonService.setCustomer(data)
    }

   
 
})


.controller('BusinessDisplayCtrlGas', function($scope, $http, $state,commonService) {
       //var city1 = localStorage.getItem("city");
       var city = JSON.parse(localStorage.getItem("city"));
       
         url='http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Gas';


       $http.get('http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Gas')
        

      .success(function (response) {$scope.custmerNames = response.records;});
        $scope.customerDetail = function(contactNumber){

            var data;
                for(var i = 0; i <$scope.custmerNames.length; i++){
                   if($scope.custmerNames[i].Contact === contactNumber){
                   data = $scope.custmerNames[i];
                   break;
              }
        }
        commonService.setCustomer(data)
    }
 
 })



.controller('CustomerDetailCtrl', function($scope,$http,$ionicPopup, commonService, $state) {
  $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
  //var self = this;
  
  $scope.customerDetailData = commonService.getCustomer();
            var customer = new Array();
           $scope.data  = {
  //              cusername:'',
  //              ccontact: '',
  //              clocation:'',
                  ctype: '',
                  bdate: '',
               };
// to do list

        $scope.items= [];
        
        $scope.add = function(data) {
        $scope.items.push(data);
        $scope.addToDoValue = '';
        }
        $scope.delete = function() {
        $scope.items.splice(this.$index, 1);
        }
       
        $scope.submitc = function(){ 

        console.log("num1 "+$scope.cmobno);
        console.log("ctype " + $scope.data.ctype);  
        console.log("date " + $scope.data.bdate);
        console.log("contact " +  $scope.customerDetailData.Contact);


        var linkc = 'http://ontouch.co.in/app_appointment_api.php';
        // var linkc = 'http://localhost//phptests/capi.php';
        $http.post(linkc, {
                            ctype : $scope.data.ctype,  
                            contact : $scope.cmobno,
                            bdate: $scope.data.bdate,                        
                            //businessname : $scope.customerDetailData.Name,
                            businesscontact : $scope.customerDetailData.Contact

        }).then(function (res){
            $scope.response = res.data;

        });        
        var alertPopup = $ionicPopup.alert({
         title: 'Welcome! Your Account has been successfully Added',
         template: 'Thank You'

       });
        //customer.push($scope.data);
        //localStorage.setItem('customer', JSON.stringify(customer));
        alertPopup.then(function(res) {
          console.log('Thank you for adding your Account');

       });

        //console.log("date" + $rootScope.datetimeValue);
        //console.log($scope.cmobno);
        console.log($scope.customerDetailData.Name);
        //console.log($scope.customerDetailData.Contact);
        $state.go('tab.dash',{},{reload:true});
  
    };
       
})


// Business create controller 
.controller('BusinessDetailCtrl', function($scope, $http, $ionicPopup, $state,$cordovaCamera,$ionicSideMenuDelegate) {
   
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.pictureUrl = 'http://placehold.it/300x300';
   $scope.takePicture = function(){
      var options = {
        destinationType: Camera.destinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
         // allowEdit:true,
       encodingType: Camera.EncodingType.JPEG,
       }

   $cordovaCamera.getPicture({options})
   .then(function(data){
     console.log('camera data:' + angular.toJson(data));
       $scope.pictureUrl = 'data:image/jpeg;base64,' +data;
   }, function(error){
     console.log('camera error:' + angular.toJson(data));
   });
};


$scope.Vehicles = [  
              {  
                id: '1',  
                vehicle: 'Four Wheeler'  
            }, {  
                id: '2',  
                vehicle: 'Two Wheeler'  
            }];  

// local storage 
 // var blocal = new Array();
 //           $scope.data  = {
 //               username:'',
 //               contact: '',
 //               details:'',
 //              };

    $scope.data = {};
    $scope.businessSubmit = function(){
        var link = 'http://ontouch.co.in/app_ServiceInfo_api.php';
        $http.post(link, {
                          sname : $scope.data.sname,
                          contact1 : $scope.data.contact1,
                          contact2 : $scope.data.contact2,
                          vehicle : $scope.data.vehicle,
                          area : $scope.data.area,
                          company : $scope.data.company,
                          city : $scope.data.city

        }).then(function (res){
            $scope.response = res.data;
        });

        var alertPopup = $ionicPopup.alert({
        title: 'Welcome! Your Business Created',
        template: 'Thank You'

   });

        //blocal.push($scope.data);
        //localStorage.setItem('blocal', JSON.stringify(blocal));
        // localStorage.setItem('bmobno', JSON.stringify($scope.data.contact1));
          localStorage.setItem('vehiclei', JSON.stringify($scope.data.vehicle));
        alert($scope.data.vehicle);
       
        alertPopup.then(function(res) {
        console.log('Thank you for adding your Business');
        // console.log($scope.userselected.vehicle);
        
   });
        
         $state.go('appointmenstlist',{},{reload:true});
         
      

 };

    
})


.controller('AppointmenstlistCtrl', function($scope,$http,$state, commonService,$location,$ionicSideMenuDelegate) {
      $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));

    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
    $http.get("http://ontouch.co.in/app_appointlist_api.php?businessmob="+$scope.cmobno)
      .success(function (response) {$scope.appointDisplay = response.records;});

 //        $scope.toggle = function () {
 //        $scope.toggleVar = !$scope.toggleVar;
 // };

 
  $scope.toggleGroup = function(value) {
    if ($scope.isGroupShown(value)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = value;
    }
  };
  $scope.isGroupShown = function(value) {
    return $scope.shownGroup === value;
  };

    
})



// displaying 
.controller('ItemCtrl', function($scope,$rootScope,$ionicPopup,$state,$http,commonService,$ionicSideMenuDelegate) {
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  // star rating
  $scope.ratingComment= function(){
 
   };
  $scope.rating = 1;
    $scope.rateFunction = function(rating) {
      // alert('Rating selected - ' + rating);
      console.log(rating);
    };
  
  
  $scope.sellItemToCustomer = commonService.getSellCustomer();
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
    if(fromState.name == 'tab.dash') {
       $scope.sellItemToCustomer = commonService.getSellCustomer();
    }
})


 $scope.totalCost = function() { 
  console.log($scope.bdate);
  var total = 'http://ontouch.co.in/businessinfo.php';
        $http.post(total, {bnos : $scope.bnos,
                          brate : $scope.brate,
                          bdate : $scope.bdate,
                          total : $scope.total,
                          csid : $scope.sellItemToCustomer.cust_id,
                          bsid : $scope.sellItemToCustomer.business_id

        }).then(function (res){
            $scope.response = res.data;
        });

// An alert dialog
   var alertPopup = $ionicPopup.alert({
     title: 'Thanks! Your Purchase is successfully submitted',
     template: 'Welcome Again'
   });

     alertPopup.then(function(res) {
     console.log('Thanks for your Purchase');

   });

$state.go('tab.dash',{},{reload:true});


 };
 //Add counters
$scope.bnos = null;
$scope.brate = null;
$scope.total= $scope.bnos*$scope.brate;
$scope.addCounter = function(reference){
     if(reference==="quantity"){   
            $scope.bnos = $scope.bnos+1;
     }
     else{    
           $scope.brate = $scope.brate+1;
    }
    totalCount();
};

$scope.subCounter = function(reference){
     if(reference==="quantity"){
         if($scope.bnos>1)
              $scope.bnos = $scope.bnos-1;
     }
     else{
         if($scope.brate>1)
             $scope.brate = $scope.brate-1;
     }
     totalCount();
 
};

$scope.checkCartCount =function(ref){

if(ref==="quantity"){
  if($scope.bnos===undefined)
    $scope.bnos = null;
}
else
  if($scope.brate===undefined){
  $scope.brate = null;
   }
   totalCount();
 };
 
 function totalCount(){
  $scope.total= $scope.bnos*$scope.brate;
 }
  
});
