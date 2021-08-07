angular.module('starter.controllers', [])

// login controller
.controller('loginController', function($scope, $state,$http){
        $scope.data = {};
        var arr = new Array();
           $scope.data  = {
               logname:'',
               logcontact:'',
              };

      $scope.login = function(){
      $state.go('tab.dash');
        var log = 'http://ontouch.co.in/loginapi.php';
        $http.post(log, {logname: $scope.data.logname,
                         logcontact: $scope.data.logcontact

        }).then(function (res){
            $scope.response = res.data;
        });
        arr.push($scope.data);
        localStorage.setItem('arr', JSON.stringify(arr));
       
    };
        
})
// dash controller
.controller('DashCtrl', function($scope,$http,$state, commonService,$location,$ionicSideMenuDelegate) {
// side menue
       $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };


     
        $scope.toggle = function () {
        $scope.toggleVar = !$scope.toggleVar;

        var nos = localStorage.getItem('bmobno');
         console.log(nos)
        url="http://ontouch.co.in/cabc.php?businessmob="+nos;
          console.log(url)
      
         $http.get(url)
        
      //$http.get("http://ontouch.co.in/cabc.php")
        .success(function (response) {$scope.customerDisplay = response.records;});
       
       };


       $scope.purchaseDetaildata= function(customer){
        commonService.setSellCustomer(customer);  
        // console.log(setSellCustomer.business_id);
        $state.go('tab.purchasedetail');    
       };


       $scope.sellItemToCustomer = function(customer){
        commonService.setSellCustomer(customer);
        $state.go('tab.display', {}, { reload: true });
       };
 })


// PPurchase Details 
.controller('PurchaseDetailCtrl', function($scope,$ionicPopup,$state,$http,commonService) {
  $scope.sellItemToCustomer = commonService.getSellCustomer();
var url = "http://ontouch.co.in/iteminfo.php?custid="+$scope.sellItemToCustomer.cust_id;
       console.log(url); 
        $http.get(url)

       .success(function (response) {$scope.customerPurchaseData = response.records;});
       
})
 


// Business list controller 
.controller('BusinessDisplayCtrl', function($scope, $http, $state,commonService) {
//$scope.data.contact = 10
       var nos = localStorage.getItem('bmobno');
      console.log(nos)
      url="http://ontouch.co.in/abc.php?businessmob="+nos;
       console.log(url)
      // $http.get("http://ontouch.co.in/abc.php?businessmob="+$scope.data.contact)
       //$http.get("http://ontouch.co.in/abc.php?businessmob=9999937636")
       $http.get(url)
        

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
  $scope.customerDetailData = commonService.getCustomer();
           var customer = new Array();
           $scope.data  = {
               cusername:'',
               ccontact: '',
               clocation:'',
               ctype: '',
              };

        $scope.submitc = function(){       
        var linkc = 'http://ontouch.co.in/capi.php';
         // var linkc = 'http://localhost//phptests/capi.php';
        $http.post(linkc, {cusername: $scope.data.cusername,
                            ccontact : $scope.data.ccontact,
                            clocation: $scope.data.clocation,
                            ctype : $scope.data.ctype,                         
                            businessname : $scope.customerDetailData.Name,
                            businesscontact : $scope.customerDetailData.Contact

        }).then(function (res){
            $scope.response = res.data;

        });
        
        var alertPopup = $ionicPopup.alert({
         title: 'Welcome! Your Account has been successfully Added',
         template: 'Thank You'

       });
 
        customer.push($scope.data);
        localStorage.setItem('customer', JSON.stringify(customer));
        alertPopup.then(function(res) {
          console.log('Thank you for adding your Account');

       });
        $state.go('tab.dash');
  // 
    };
})


// Business create controller 
.controller('BusinessDetailCtrl', function($scope, $http, $ionicPopup, $state,cameraService) {
  // Camera
$scope.takePicture = function (options) {
  
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
    
   };
// local storage 
 var blocal = new Array();
           $scope.data  = {
               username:'',
               contact: '',
               details:'',
              };

    $scope.data = {};
    $scope.businessSubmit = function(){
        var link = 'http://ontouch.co.in/napi.php';
        $http.post(link, {username : $scope.data.username,
                          contact : $scope.data.contact,
                          details : $scope.data.details

        }).then(function (res){
            $scope.response = res.data;
        });

        var alertPopup = $ionicPopup.alert({
        title: 'Welcome! Your Business Created',
        template: 'Thank You'
   });

        blocal.push($scope.data);
        localStorage.setItem('blocal', JSON.stringify(blocal));
        localStorage.setItem('bmobno', JSON.stringify($scope.data.contact));
        localStorage.getItem('$scope.data.username');
        console.log($scope.data.username)
       
        alertPopup.then(function(res) {
       // console.log('Thank you for adding your Business');
        
   });
         $state.go('tab.chats');
 };
    
})

// displaying 
.controller('ItemCtrl', function($scope,$rootScope,$ionicPopup,$state,$http,commonService) {
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

$state.go('tab.dash');


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
