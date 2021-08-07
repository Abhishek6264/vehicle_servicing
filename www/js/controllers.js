angular.module('starter.controllers', ['angular.filter','ngCordova'])
   
// login controller
// 
.controller('loginController', function($scope, $state,$http,$ionicPlatform,$cordovaDevice,$ionicSideMenuDelegate){
        $ionicSideMenuDelegate.canDragContent(false);

         $ionicPlatform.ready(function() {
            $scope.$evalAsync(function() {
            var device = $cordovaDevice.getDevice();
            //$scope.manufacturer = device.manufacturer;
            //$scope.model = device.model;
            //$scope.platform = device.platform;
            $scope.uuid = device.uuid;
            });
            });
        // Current year in footer section
         var d = new Date();
         document.getElementById("demo").innerHTML = d.getFullYear();
       
        // url= "http://ontouch.co.in/app_business_cust_id.php?cust_mobno="+$scope.data.logcontact;
        // //console.log(url);
        // $http.get(url)
        // .success(function (response) {$scope.recordlist = response.records;}); 

 
  
  $scope.Cities = [  
              {  
                id: '1',  
                city: 'Bangalore'  
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
                city: 'Meerut'
            }, {  
                id: '10',  
                city: 'Hydrabad'  
            }, {  
                id: '11',  
                city: 'Chennai'  
            }, {  
                id: '12',  
                city: 'Kolkata'  
            }, {  
                id: '13',  
                city: 'Muzaffarnagar'  
           }, {  
                id: '14',  
                city: 'Mumbai' 
           }, {  
                id: '15',  
                city: 'Chandigarh' 
           }, {  
                id: '16',  
                city: 'Deharadun' 
            
            }];  

        $scope.data = {};
        var arr = new Array();
           $scope.data  = {
               logname:'',
               logcontact:'',
              };
     //Devise ID
                
   $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
   $scope.signup = function(){

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

      if(JSON.parse(localStorage.getItem('list')) > 0){
            $state.go('appointmenstlist');
            }
         else   {
            $state.go('tab.dash');
         }      
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
        localStorage.setItem('arr', JSON.stringify(arr));
        localStorage.setItem('city', JSON.stringify($scope.userselected.city));
        localStorage.setItem('cmobno', JSON.stringify($scope.data.logcontact)); 
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
// 
.controller('logoutController', function($scope, $state,$http,$location){
      $scope.logout =function(){
      localStorage.removeItem('arr');
       localStorage.removeItem('bmatch');
        localStorage.removeItem('cmatch');     
      //$state.go('signup',null,{reload:true});
      $location.path('signup');
      };
      $scope.serviceid = JSON.parse(localStorage.getItem('bmatch'));
      console.log($scope.serviceid); 
      // $scope.id=(JSON.parse(localStorage.getItem('bmatch')) > 0)
      // console.log($scope.id)
})



.controller('LoginCtrl', function($scope, $state,$http,$location,$ionicPlatform,$cordovaDevice,$ionicSideMenuDelegate){
            $ionicPlatform.ready(function() {
            $scope.$evalAsync(function() {
            var device = $cordovaDevice.getDevice();
            //$scope.manufacturer = device.manufacturer;
            //$scope.model = device.model;
            //$scope.platform = device.platform;
            $scope.uuid = device.uuid;
            });
            });
       
      
        $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
        $scope.login=function(){
         // url="http://ontouch.co.in/app_login_validation.php?did=1123r4df";
         url="http://ontouch.co.in/app_check_device_id.php?did=abc";
        //$http.get("http://ontouch.co.in/app_test.php?logname="+$scope.data.logname+"&did=23423r4df&city="+$scope.data.city+"&logcontact="+$scope.data.logcontact")
        console.log(url);
        $http.get(url)
       .then(function (response) {$scope.records = response.data.records;
        console.log($scope.records);
       //localStorage.setItem('list', $scope.records[0].Matched); 
         // localStorage.setItem('devid', JSON.stringify($scope.records[0].Matched));
         localStorage.setItem('cmatch', JSON.stringify($scope.records[0].CMatched));
         localStorage.setItem('bmatch', JSON.stringify($scope.records[1].BMatched));
       //console.log($scope.records[0].Matched);
            console.log(JSON.parse(localStorage.getItem('cmatch')));
            console.log(JSON.parse(localStorage.getItem('bmatch')));

         if(JSON.parse(localStorage.getItem('cmatch'))==null && JSON.parse(localStorage.getItem('bmatch'))==null ){
            $location.path('signup');
            console.log('one');
         }
         else if(JSON.parse(localStorage.getItem('cmatch'))!=null && JSON.parse(localStorage.getItem('bmatch'))==0){
          $location.path('tab/dash');
          console.log('Two');
         }
         else if(JSON.parse(localStorage.getItem('cmatch'))!=null && JSON.parse(localStorage.getItem('bmatch')) > 0){
         $location.path('appointmenstlist');
         console.log('three');
         }

         
       // if(JSON.parse(localStorage.getItem('devid'))> 0){
       //      $state.go('tab.dash');
       //      }
       //      else{
       //      $location.path('signup');
       //      }      
         }); 
       // $location.path('tab/dash');
       };


       $scope.register=function(){
       $location.path('signup');
       };
 

        // url="http://ontouch.co.in/app_test.php?logname="+$scope.data.logname+"&did="+$scope.uuid+"&logcontact="+$scope.data.logcontact;
        // console.log(url);
        // $http.get(url)
        // .then(function (response) {$scope.records = response.data.records;
        //  localStorage.setItem('list', JSON.stringify($scope.records[0].Matched));
        //  console.log(JSON.parse(localStorage.getItem('list')));
        //     if(JSON.parse(localStorage.getItem('list')) > 0){
        //           $state.go('appointmenstlist');
        //           }
        //        else {
        //           $state.go('tab.dash');
        //        }      
        //   });


})



// dash controller
.controller('DashCtrl', function($scope,$http,$state,commonService,$location,$ionicSideMenuDelegate,$ionicPlatform,$cordovaDevice) {
    
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
        $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
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


 })
//
// PPurchase Details 
.controller('PurchaseDetailCtrl', function($scope,$ionicPopup,$state,$http,commonService) {
  $scope.sellItemToCustomer = commonService.getSellCustomer();
      // var url = "http://ontouch.co.in/iteminfo.php?custid="+$scope.sellItemToCustomer.cust_id;
      //  // console.log(url); 
      //  $http.get(url)
      //  .success(function (response) {$scope.customerPurchaseData = response.records;});

})
 


//Car Services list controller 
.controller('BusinessDisplayCtrlCar', function($scope, $http, $state,commonService) {
       //var city1 = localStorage.getItem("city");
         var city = JSON.parse(localStorage.getItem("city"));
         url='http://ontouch.co.in/serviceCenterDisplay.php?city='+city+'&vehicletype=Car';
              console.log(city);
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



.controller('CustomerDetailCtrl', function($scope,$http,$filter,$ionicPopup, commonService, $state) {
  $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
   $scope.customerDetailData = commonService.getCustomer();
// $scope.busineid = JSON.parse(localStorage.getItem('list'));
// console.log($scope.busineid);

 $scope.dty = $filter('date')(new Date(), 'dd-MMM-yyyy');
 // $scope.dty.setDate($scope.dty.getDate() + 1);
 var date1 = $scope.dty;
 $scope.custDate={ 
 cdate: new Date(date1)
 }

        $scope.dty1 = $filter('date')(new Date(), 'dd-MMM-yyyy');
        $scope.today = new Date();
        $scope.tomorrow = new Date();
        $scope.tomorrow2 = new Date();
        $scope.tomorrow = $scope.tomorrow.setDate($scope.tomorrow.getDate() +1);
        $scope.tomorrow2 = $scope.tomorrow2.setDate($scope.tomorrow2.getDate() +2);
        $scope.dty1 = $filter('date')($scope.tomorrow, 'dd-MMM-yyyy');
        $scope.dty2 = $filter('date')($scope.tomorrow2, 'dd-MMM-yyyy');
        console.log($scope.dty1);
        console.log($scope.dty2);

         $scope.dtyd1 = $filter('date')($scope.tomorrow, 'yyyy-MM-dd');
         $scope.dtyd2 = $filter('date')($scope.tomorrow2, 'yyyy-MM-dd');
         console.log($scope.dtyd1);
         console.log($scope.dtyd2);
// var numberOfDaysToAdd = 1;
//   $scope.newdate = $scope.dty.setDate($scope.dty.getDate() + numberOfDaysToAdd); 

//    var dat1 = $scope.dty+1;
//    var dat2 = $scope.dty+2;
   $scope.apntcnt1 = 0;
   $scope.apntcnt2 = 0;
//    console.log($scope.newdate);
    //$scope.details = [{grantdate:'01/01/2015',expdate:'12/31/201'}];
    
        // grantdate = moment(grantdate).format("MM-DD-YYYY HH:mm");;
        // expdate = moment(expdate).format("MM-DD-YYYY HH:mm");;
        // if (expdate>grantdate)
        // {
        //     alert("expdate : " + expdate+ " is greater than " + " grantdate : " + grantdate );
        // }
        console.log($scope.customerDetailData.Contact);
        $http.get('http://ontouch.co.in/app_apnt_booked_get.php?businessmob='+$scope.customerDetailData.Contact)
       // $http.get('http://ontouch.co.in/app_apnt_booked_get.php?businessmob=9897925880')
       .success(function (response) {$scope.total = response.records;
        console.log('registered apnts' +$scope.total.length);
  


        if($scope.total.length > 0){
          // $scope.totalAppt[0].appointment_counts=99;
          // $scope.totalAppt[1].appointment_counts=990;
         //$scope.totalAppt[0].appointment_date=29;
          //$scope.totalAppt[1].appointment_date=20;
        if ($scope.dtyd1 == $scope.total[0].appointment_date ){
            $scope.apntcnt1 = $scope.total[0].appointment_counts;
            console.log("only date1- " + $scope.apntcnt1 );
          }

        if ($scope.dtyd2 == $scope.total[0].appointment_date )
             { 
              $scope.apntcnt2 = $scope.total[0].appointment_counts;
              console.log("only date2- " + $scope.apntcnt2 );
            }
             else if($scope.dtyd2 == $scope.total[1].appointment_date)
             { 
               console.log("only date22- " + $scope.apntcnt2 );
              $scope.apntcnt2 = $scope.total[1].appointment_counts;
            }
         
          // $scope.dty1 = $scope.totalAppt[0].appointment_date;
          // $scope.dty2 = $scope.totalAppt[1].appointment_date;
          // 
        }

     
      console.log("r1"+$scope.apntcnt1);
      console.log("r2"+$scope.apntcnt2);
      })


         $http.get('http://ontouch.co.in/app_list_appnt_counts_get.php?businessmob='+$scope.customerDetailData.Contact)
       // $http.get('http://ontouch.co.in/app_list_appnt_counts_get.php?businessmob=9897925880')
       .success(function (response) {$scope.totalAppt = response.records;
        console.log('totalAppts ' +$scope.totalAppt.length);
  
        $scope.xyz = 200 ;
        $scope.pqr = 200 ;
        if($scope.totalAppt.length > 0){
          // $scope.totalAppt[0].appointment_counts=99;
          // $scope.totalAppt[1].appointment_counts=990;
         //$scope.totalAppt[0].appointment_date=29;
          //$scope.totalAppt[1].appointment_date=20;
          if ($scope.dtyd1 == $scope.totalAppt[0].appointment_date ){
            $scope.xyz = $scope.totalAppt[0].appointment_counts;
          }
          if ($scope.dtyd2 == $scope.totalAppt[0].appointment_date)
            {$scope.pqr = $scope.totalAppt[0].appointment_counts;
            }
          else if($scope.dtyd2 == $scope.totalAppt[1].appointment_date)
            {$scope.pqr = $scope.totalAppt[1].appointment_counts;
            }
        }
      $scope.xyz = $scope.xyz - $scope.apntcnt1;
      $scope.pqr = $scope.pqr - $scope.apntcnt2;
      console.log("apnts1 "+$scope.xyz);
      console.log('apmts2 '+$scope.pqr);
      })
            var customer = new Array();
            $scope.data  = {
                  ctype: '',
                  bdate: '',
               };

//          $scope.custSubmit= function() { 
//     if ( $scope.uidate>$scope.dty && $scope.uidate<=$scope.dty+2 ) {
//       document.getElementById('custsubmit').setAttribute("disabled","disabled");
//        alert("Appointment Date should be less  than current Date +2 " );
       
//     } else {
      
//        document.getElementById('custsubmit').removeAttribute("disabled");
      
//         alert("ui date should be greater than current date " );

//     }
// };      
            $scope.setdate = function(data){
                  if(data===1){
                   $scope.newdate =$scope.dty1;
                  } else{
                    $scope.newdate =$scope.dty2;
                  }
            };

$scope.Hours =  [  
               {  
                id: '1',  
                hour: '06' 
            },  {  
                id: '2',  
                hour: '07'
            },  {  
                id: '3',  
                hour: '08'
            },  {  
                id: '4',  
                hour: '09'
            },  {
                id: '5',  
                hour: '10'
            },  { 
                id: '6',  
                hour: '11'
            }]; 


  $scope.Minutes =  [ 
           {  
                id: '1',  
                minute: '00'
            }, {  
                id: '2',  
                minute: '10' 
            },  {  
                id: '3',  
                minute: '20'
            },  {  
                id: '4',  
                minute: '30'
            },  {  
                id: '5',  
                minute: '40'
            },  {
                id: '6',  
                minute: '50'
            }]; 

            var hour = 0;
            var minute =0; 
            $scope.callFunction = function(data) {
             // console.log(data);
             // console.log(data.hour);
             hour = data.hour;      
            };
            $scope.callFunct=function(data){
            // console.log(data);
            // console.log(data.minute);
            minute= data.minute;
            };
        
        $scope.submitc = function(){ 
            var datetim1= ($scope.newdate+ " " +hour+ ":" +minute );
            console.log('datetimeshow '+datetim1);
            console.log(minute + " " + hour);
            // console.log($scope.selected);

            $scope.uidate =   $filter('date')($scope.data.bdate, "yyyy-MM-dd");         
            console.log("num1 "+$scope.cmobno);
            console.log("ctype " + $scope.data.ctype);  
            // console.log("uidate " + $scope.uidate);
            // console.log("sdate"+ $scope.dty);
            // console.log("time " + $scope.custDate.cdate);
            console.log("contact " +  $scope.customerDetailData.Contact);
            var tim1 =  $filter('date')($scope.custDate.cdate, 'dd-MMM-yyyy')
            // console.log("doubt"+$scope.custDate.cdate);

            $scope.newtime =   $filter('date')($scope.data.btime, "HH:mm:ss");
            // console.log('newtime '+$scope.newtime);
            console.log($scope.data.c1);
            console.log($scope.data.c2);
            console.log($scope.data.c3);
            console.log($scope.data.c4);
            var ctype = $scope.data.c1+" "+$scope.data.c2+" "+$scope.data.c3+" "+$scope.data.c4;
            console.log(ctype);
        
        var linkc = 'http://ontouch.co.in/app_appointment_api.php';
        $http.post(linkc, {
                            ctype : ctype,  
                            contact : $scope.cmobno,
                            // bdate: $scope.custDate.cdate,  
                             bdate:   datetim1, 
                             // btime:$scope.data.btime,
                            //businessname : $scope.customerDetailData.Name,
                            businesscontact : $scope.customerDetailData.Contact
                                                           
                        }).then(function (res){
                            $scope.response = res.data;

                        });
        
         var alertPopup = $ionicPopup.alert({
         title: 'Your appointment has been successfully added!',
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
//  

.controller('MedicineDetailCtrl', function($scope,$http,$ionicPopup, commonService, $state) {
  $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));  
  $scope.customerDetailData = commonService.getCustomer();
          
        // To DO list
        var items = new Array();
        $scope.data = {};
        $scope.items= [];
        $scope.checked = [];

        // Add a Item to the list
        $scope.add = function() {
            $scope.items.push({medName: $scope.data.addToDoValue,count:$scope.data.itemNumber});
            localStorage.setItem('items', JSON.stringify($scope.items));
            console.log($scope.items)
            $scope.data.addToDoValue='';
            $scope.data.itemNumber=undefined;
            $scope.isMedicine=true; 
        };
        // Add Item to Checked List and delete from Unchecked List
        $scope.toggleChecked = function (index) {
        $scope.checked.push($scope.items[index]);
        $scope.items.splice(index, 1);
       };

        // Get Total Items
        $scope.getTotalItems = function () {
            return $scope.items.length;
        };

          // // Get Total Checked Items
          //     $scope.getTotalCheckedItems = function () {
          //         return $scope.checked.length;
          //     };

        $scope.delete = function() {
        $scope.items.splice(this.$index, 1);
        };     
        $scope.isMedicine=true;
        $scope.medicines= function(){
          if($scope.data.addToDoValue!=undefined && $scope.data.addToDoValue!='' && $scope.data.itemNumber!=undefined  ){
              $scope.isMedicine=false;
            }else{
              $scope.isMedicine=true;
            }
          }
           var customer = new Array();
           $scope.data  = {
                  ctype: '',
                  bdate: '',
               };
        $scope.submitc = function(){  
      
            console.log("num1 "+$scope.cmobno);
            console.log("ctype " + $scope.data.ctype);  
            console.log("date " + $scope.data.bdate);
            console.log("contact " +  $scope.customerDetailData.Contact);
            console.log($scope.items);

        var linkc = 'http://ontouch.co.in/app_add_medicines.php';
        // var linkc = 'http://localhost//phptests/capi.php';
        //var linkc = 'http://ontouch.co.in/app_appointment_api.php';
        $http.post(linkc, {
                            ctype : $scope.data.ctype,  
                            contact : $scope.cmobno,
                            bdate: $scope.data.bdate,   
                            items: $scope.items,                     
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
.controller('BusinessDetailCtrl', function($scope, $http, $ionicPopup,$cordovaDevice,$cordovaCamera,$cordovaFile, $state,$ionicSideMenuDelegate) {
    // $cordovaCamera,
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
    };

//   $scope.pictureUrl = 'http://placehold.it/300x300';
//    $scope.takePicture = function(){
//       var options = {
//         destinationType: Camera.destinationType.DATA_URL,
//         sourceType: Camera.PictureSourceType.CAMERA,
//          // allowEdit:true,
//        encodingType: Camera.EncodingType.JPEG,
//        }

//    $cordovaCamera.getPicture({options})
//    .then(function(data){
//      console.log('camera data:' + angular.toJson(data));
//        $scope.pictureUrl = 'data:image/jpeg;base64,' +data;
//    }, function(error){
//      console.log('camera error:' + angular.toJson(data));
//    });
// };
//  $scope.images = [];
 
//  $scope.addImage = function() {
  
//   var options = {
//     destinationType : Camera.DestinationType.FILE_URI,
//     sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
//     // allowEdit : true,
//     encodingType: Camera.EncodingType.JPEG,
//     popoverOptions: CameraPopoverOptions,
//     saveToPhotoAlbum: false,
//     correctOrientation:true
//   };
  
  
//   $cordovaCamera.getPicture(options).then(function(imageData) { 
//     onImageSuccess(imageData);
 
//     function onImageSuccess(fileURI) {
//       createFileEntry(fileURI);
//     }
 
//     function createFileEntry(fileURI) {
//       window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
//     }
 
//     //
//     function copyFile(fileEntry) {
//       var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
//       var newName = makeid() + name;
 
//       window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
//         fileEntry.copyTo(
//           fileSystem2,
//           newName,
//           onCopySuccess,
//           fail
//         );
//       },
//       fail);
//     }
    
//     
//     function onCopySuccess(entry) {
//       $scope.$apply(function () {
//         $scope.images.push(entry.nativeURL);
//       });
//     }
 
//     function fail(error) {
//       console.log("fail: " + error.code);
//     }
 
//     function makeid() {
//       var text = "";
//       var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
//       for (var i=0; i < 5; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//       }
//       return text;
//     }
 
//   }, function(err) {
//     console.log(err);
//   });
// }
// $scope.urlForImage = function(imageName) {
//   var name = imageName.substr(imageName.lastIndexOf('/') + 1);
//   var trueOrigin = cordova.file.dataDirectory + name;
//   return trueOrigin;
// };



            $scope.Vehicles = [  
                        {  
                          id: '1',  
                          vehicle: 'Four Wheeler'  
                      }, {  
                          id: '2',  
                          vehicle: 'Two Wheeler'  
                      }];  
            // local storage 
            var blocal = new Array();
                       $scope.data  = {
                           username:'',
                           contact: '',
                           details:'',
                          }; 
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
         localStorage.setItem('bmobno', JSON.stringify($scope.data.contact1));
          localStorage.setItem('vehicle', JSON.stringify($scope.data.vehicle));
        // alert($scope.data.vehicle);
       
        alertPopup.then(function(res) {
        console.log('Thank you for adding your Business');
        // console.log($scope.userselected.vehicle);
        
   });
        
         $state.go('appointmenstlist',{},{reload:true});      

};

    
})


.controller('AppointmenstlistCtrl', function($scope,$http,$state,$filter,$ionicPopup, commonService,$location,$ionicSideMenuDelegate) {
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
      // Total Appointment per day   
    var apptnum  = new Array();
        $scope.data={
          numberAppt:'',
          appDate:'',
        };
        $scope.tomorrow = new Date();
        $scope.aptdate = $scope.tomorrow.setDate($scope.tomorrow.getDate() +1);
        $scope.abc = $filter('date')($scope.aptdate, 'dd-MMM-yyyy');
        console.log($scope.abc);
        $scope.abc = new Date($scope.abc);
        $scope.setapptdate= $filter('date')( $scope.abc, "yyyy-MM-dd");
        console.log($scope.setapptdate);



       // $scope.dty = $filter('date')(new Date(), 'dd-MMM-yyyy');
       // var date1 = $scope.dty;
       // $scope.custDate={cdate: new Date(date1)}
       //$scope
       $scope.bsid = JSON.parse(localStorage.getItem('bmatch'));
       $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
       $scope.TotalAptNum = function(){        
       $scope.appDate =   $filter('date')($scope.data.appDate, "yyyy-MM-dd");
       apptnum.push($scope.data);
       localStorage.setItem('apptnum', JSON.stringify(apptnum));
       console.log('count ' + $scope.data.numberAppt);
       // console.log('date '+$scope.custDate.cdate);
       // console.log($scope.appDate);
       $http.get("http://ontouch.co.in/app_service_center_appnt_details.php?businessmob="+$scope.cmobno+"&adate="+$scope.setapptdate+"&total_counts="+$scope.data.numberAppt)      
       .success(function (response) {$scope.appoint = response.records;});     
        // .success(function (response) {$scope.totalApptService = response.records;});
         var alertPopup = $ionicPopup.alert({
         title: 'Total Acceptable Appointments has been added!',
         template: ''
       });  
    };// End of Totol Appointment per day

 
   // $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
 //   $http.get("http://ontouch.co.in/app_appointlist_api.php?businessmob="+$scope.cmobno)
 //      .success(function (response) {$scope.appointDisplay = response.records;});

 //       $scope.toggle = function () {
 //       $http.get("http://ontouch.co.in/app_appointlist_api.php?businessmob="+$scope.cmobno)
 //      .success(function (response) {$scope.appointDisplay = response.records;});
 //        $scope.toggleVar = !$scope.toggleVar;
 // };
        var init = function () {      
        };
        init(); 
          $scope.init = function ($window) {
          window.init==true;
         };

         $http.get("http://ontouch.co.in/app_appointment_booked.php?sid="+$scope.bsid)
         .success(function (response) {$scope.bookedAppointment = response.records;          
           });

         $scope.bsid = JSON.parse(localStorage.getItem('bmatch'));
         // $scope.buttonStyle="button-stable";

         // Booked
         $scope.bookload = function () {
         $scope.bookedVar = !$scope.bookedVar;
         $http.get("http://ontouch.co.in/app_appointment_booked.php?sid="+$scope.bsid)
         .success(function (response) {$scope.bookedAppointment = response.records;});
         };
          
// Accepted
        $scope.readyload = function () {
           $scope.bookedVar = !$scope.bookedVar;
           $http.get("http://ontouch.co.in/app_appointment_accepted.php?sid="+$scope.bsid)
           .success(function (response) {$scope.bookedAppointment = response.records; });
           
      };

 // //Ready
        $scope.deliveredload = function () {
           $scope.bookedVar = !$scope.bookedVar;
           $http.get("http://ontouch.co.in/app_appointment_ready.php?sid="+$scope.bsid)
          .success(function (response) {$scope.bookedAppointment = response.records;});               
      };

// Inidividual toggle
      $scope.toggleGroup = function(book) {
              if ($scope.isGroupShown(book)) {
                      $scope.shownGroup = null;
              } else {
                 $scope.shownGroup = book;
              }
          };
          $scope.isGroupShown = function(book) {
          return $scope.shownGroup === book;
          };

     
//Appointment Accept 
    var vehicleAccept = new Array();
    $scope.data={
    appointmentId:'',
    };
    $scope.accept=  function(appointmentId,stage,$index){
    var acceptapt = 'http://ontouch.co.in/app_update_service_status_post.php';
        $http.post(acceptapt, {apid: appointmentId,
                               stage: stage        
                  }).then(function (res){
                  $scope.response = res.data;
                  });
                $scope.bookedAppointment.splice(this.$index, 1);
                console.log(appointmentId);
                console.log(stage);
              }; 
// Link to check Users % rating
     $scope.chekcRating = function(){
     $state.go('usersratinglist')
     };

})

// All users rating
.controller('UsersratinglistCtrl', function($scope,$http,$state,$ionicSideMenuDelegate,$ionicPopup,commonService) {
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
        $scope.cmobno= JSON.parse(localStorage.getItem('cmobno'));
        $scope.bsid = JSON.parse(localStorage.getItem('bmatch'));

        $http.get("http://ontouch.co.in/app_all_rating_info.php?sid="+$scope.bsid+"&customer_id="+$scope.cmobno+"&rating=15")
        //$http.get("http://ontouch.co.in/app_all_rating_info.php?sid="+$scope.bsid)
     .success(function (response) {$scope.usersratingDisplay = response.records;
      var totallength = $scope.usersratingDisplay.length;
      console.log('length: '+totallength);

 
         var countsum=0;
         for(var i=0;i<totallength;i++){
         countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);

      
       }
       for(var i=0;i<totallength;i++){
         //countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);
         //var usrrat 
        $scope.usersratingDisplay[i].t_counts = parseInt($scope.usersratingDisplay[i].t_counts * 100)/parseInt(countsum);
       
        console.log("per"+$scope.usersratingDisplay[i].t_counts); 
        console.log("rate"+$scope.usersratingDisplay[i].rating);

        if ($scope.usersratingDisplay[i].rating == 5)
          {
            console.log("rating5: "+ $scope.usersratingDisplay[i].rating);
            $scope.happy = $scope.usersratingDisplay[i].t_counts ;
            console.log("happy "+$scope.happy);
          }

          if ($scope.usersratingDisplay[i].rating == 3)
          {
            console.log("rating3: "+ $scope.usersratingDisplay[i].rating);
            $scope.sad = $scope.usersratingDisplay[i].t_counts ;
            console.log("sad "+$scope.happy);
          }
          if ($scope.usersratingDisplay[i].rating == 1)
          {
            console.log("rating3: "+ $scope.usersratingDisplay[i].rating);
            $scope.angry = $scope.usersratingDisplay[i].t_counts ;
            console.log("angry "+$scope.happy);
          }

       }  
              

     });

    $scope.rateFunction = function(rating){
    //  $http.get("http://ontouch.co.in/app_cust_appoint_info.php?cust_mobno="+$scope.cmobno)
    // .success(function (response) {$scope.appointDisplay = response.records;
     // console.log($scope.appointDisplay[0].cust_name)

     $http.get("http://ontouch.co.in/app_all_rating_info.php?sid="+$scope.bsid+"&customer_id="+$scope.cmobno+"&rating="+rating)
      .success(function (response) {$scope.usersratingDisplay = response.records;

      

         var totallength = $scope.usersratingDisplay.length;
         console.log('length: '+totallength);

 
         var countsum=0;
         for(var i=0;i<totallength;i++){
         countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);

         //console.log($scope.usersratingDisplay[i].t_counts);     
         }
         for(var i=0;i<totallength;i++){
         //countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);
         //var usrrat 
         $scope.usersratingDisplay[i].t_counts = parseInt($scope.usersratingDisplay[i].t_counts * 100)/parseInt(countsum);
       
         console.log("per"+$scope.usersratingDisplay[i].t_counts); 
         console.log("rate"+$scope.usersratingDisplay[i].rating);

         if ($scope.usersratingDisplay[i].rating == 5)
          {
            console.log("rating5: "+ $scope.usersratingDisplay[i].rating);
           $scope.happy = $scope.usersratingDisplay[i].t_counts ;
            console.log("happy"+$scope.happy);
          }
          if ($scope.usersratingDisplay[i].rating == 3)
          {
            console.log("rating3: "+ $scope.usersratingDisplay[i].rating);
           $scope.sad = $scope.usersratingDisplay[i].t_counts ;
            console.log("sad"+$scope.happy);
          }
          if ($scope.usersratingDisplay[i].rating == 1)
          {
            console.log("rating1: "+ $scope.usersratingDisplay[i].rating);
           $scope.angry = $scope.usersratingDisplay[i].t_counts ;
            console.log("angry"+$scope.happy);
          }
       }  
      
      console.log('countsum: '+countsum);
        
     // An alert dialog
     var alertPopup = $ionicPopup.alert({
     title: 'Thanks for your feedback',
     template: ''
     });

     alertPopup.then(function(res) {
     console.log('Thanks Again');

     });
     console.log(rating);
     // console.log($scope.sellItemToCustomer.service_center_id)
     console.log('customermobno ' +$scope.cmobno);
     console.log('service_centerid '+$scope.bsid);    
     }); 
    
     //$window.location.reload();
     };


})



// General Rating Controller
.controller('GeneralRatingCtrl', function($scope,$rootScope,$ionicPopup,$http,$ionicSideMenuDelegate) {
    $scope.openMenu = function() {
     $ionicSideMenuDelegate.toggleLeft();
   };
    
    $scope.bsid = JSON.parse(localStorage.getItem('bmatch'));
     $scope.rateFunct=function(rate,name,vehicle,contact){
     console.log(name);
     console.log(vehicle);
     console.log(contact);
     console.log(rate);
     console.log($scope.bsid)

      var genrate = 'http://ontouch.co.in/app_rating_insert.php';
      $http.post(genrate, {
                             username:name,
                             vnumber:vehicle,
                             contact:contact,
                             rating:rate,
                             sid:$scope.bsid
                 }).then(function (res){
                 $scope.response = res.data;
        });
     var alertPopup = $ionicPopup.alert({
     title: 'Thanks for your feedback',
     template: ''
   });
    };
})


.controller('SadAngryCtrl', function($scope,$rootScope,$ionicPopup,$http,$ionicSideMenuDelegate) {
    $scope.openMenu = function() {
     $ionicSideMenuDelegate.toggleLeft();
      };

        $scope.bsid = JSON.parse(localStorage.getItem('bmatch'));
        $scope.sadFunction = function(){
           $http.get("http://ontouch.co.in/app_rating_sad.php?sid="+$scope.bsid)
          .success(function (response) {$scope.sadRating = response.records;
           console.log($scope.sadRating);
         });
        };


        $scope.angryFunction = function(){
           $http.get("http://ontouch.co.in/app_rating_angry.php?sid="+$scope.bsid)
          .success(function (response) {$scope.sadRating = response.records;
           console.log($scope.sadRating);
         });
        };

})



// Medicine list controller 
.controller('MedicineslistCtrl', function($scope,$http,$state, commonService,$ionicSideMenuDelegate) {
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
   
  $scope.medicines =  [  
               {  
                id: '1',  
                name: 'Medicine1',
                count:'10'  
            }, {  
                id: '2',  
                name: 'Medicine2',
                count:'30'  
            }, {  
                id: '3',  
                name: 'Medicine3',
                count:'40'  
            }, {  
                id: '4',  
                name: 'Medicine4',
                count:'10'  
            }, {  
                id: '5',  
                name: 'Medicine5',
                count:'70'  
            }, {  
                id: '6',  
                name: 'Medicine6',
                count:'80'  
            }, {  
                id: '7',  
                name: 'Medicine7',
                count:'60'  
            }, {  
                id: '8',  
                name: 'Medicine8',
                count:'30'  
            }, {  
                id: '9',  
                name: 'Medicine9',
                count:'40'  
            }, {  
                id: '10',  
                name: 'Medicine10',
                count:'20'  
            }]; 

             // var items = new Array();
             // $scope.data = {};
             // $scope.items= [];
               $scope.checked = [];
        // // Add a Item to the list
        //         // $scope.add = function() {
        //         // $scope.items.push({medName: $scope.data.addToDoValue,count:$scope.data.itemNumber});
        //          localStorage.setItem('items', JSON.stringify($scope.items));
        //         // $scope.data.addToDoValue='';
        //         // $scope.data.itemNumber='';
                
        //         // };


        // Add Item to Checked List and delete from Unchecked List
        $scope.toggleChecked = function (index, id, name, count) {

        $scope.checked.push($scope.medicines[index]);
        // $scope.checked.push({name: name,count:count, id:id});
        $scope.medicines.splice(this.$index,1);         
        // localStorage.setItem('medicines', JSON.stringify($scope.checked));
        console.log(id);
        console.log(name);
        console.log(count);
        console.log($scope.checked)
       };

        // Get Total Items
        $scope.getTotalItems = function () {
            return $scope.medicines.length;
        };

        // Get Total Checked Items
        $scope.getTotalCheckedItems = function () {
            return $scope.checked.length;
        };

        $scope.delete = function() {
        $scope.medicines.splice(this.$index, 1);
        };     
})


.controller('AboutusCtrl', function($scope,$http,$state,$ionicSideMenuDelegate,$ionicPopup) {
    $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
// displaying 
.controller('ItemCtrl', function($scope,$rootScope,$ionicPopup,$state,$http,commonService,$ionicSideMenuDelegate) {

   $scope.openMenu = function() {
   $ionicSideMenuDelegate.toggleLeft();
 };

  $scope.sellItemToCustomer = commonService.getSellCustomer();
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
    if(fromState.name == 'tab.dash') {
       $scope.sellItemToCustomer = commonService.getSellCustomer();
    }


})
// Rating chart

window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Total Rating",
      fontFamily: "arial black"
    },
                animationEnabled: true,
    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    theme: "theme1",
    data: [
    {        
      type: "pie",
      indexLabelFontFamily: "Garamond",       
      indexLabelFontSize: 20,
      indexLabelFontWeight: "bold",
      startAngle:0,
      indexLabelFontColor: "MistyRose",       
      indexLabelLineColor: "darkgrey", 
      indexLabelPlacement: "inside", 
      toolTipContent: "{name}: {y}hrs",
      showInLegend: true,
      indexLabel: "#percent%", 
      dataPoints: [
        {  y: 50, name: "Happy", legendMarkerType: "triangle"},
        {  y: 40, name: "Sad", legendMarkerType: "square"},
        {  y: 10, name: "Angry", legendMarkerType: "circle"}
      ]
    }
    ]
  });
  chart.render();
}

// Rating 
   // $scope.rating = 1;
   //  $scope.rateFunction = function(rating) {
   //   // alert('Rating selected - ' + rating);
   //    console.log(rating);
   // };

     $scope.cmobno = JSON.parse(localStorage.getItem('cmobno'));
     // $scope.bnom = JSON.parse(localStorage.getItem('bussmobno'))    

   $scope.rateFunction = function(rating){
     $http.get("http://ontouch.co.in/app_cust_appoint_info.php?cust_mobno="+$scope.cmobno)
    .success(function (response) {$scope.appointDisplay = response.records;
     console.log($scope.appointDisplay[0].cust_name)
      var ratecom = 'http://ontouch.co.in/app_rating_api.php';
        $http.post(ratecom, {
                           username:$scope.appointDisplay[0].cust_name,
                           customer_id : $scope.cmobno,
                           service_centerid: $scope.appointDisplay[0].service_center_id,
                          // service_centerid : $scope.sellItemToCustomer.service_center_id,
                           rating : rating
                          // comments : comment
                          // bsid : $scope.sellItemToCustomer.business_id

        }).then(function (res){
            $scope.response = res.data;
        });

// An alert dialog
   var alertPopup = $ionicPopup.alert({
     title: 'Thanks for your feedback',
     template: 'You\'re Welcome Again'
   });

     alertPopup.then(function(res) {
     console.log('Thanks Again');

   });
     console.log(rating);
     // console.log($scope.sellItemToCustomer.service_center_id)
     console.log('customermobno ' +$scope.cmobno);
     console.log('service_centerid '+$scope.appointDisplay[0].service_center_id);    
    }); 
   };

// Calulating Avg rating
      $http.get("http://ontouch.co.in/app_all_rating_info.php?sid=59")
      .success(function (response) {$scope.usersratingDisplay = response.records;

        var totallength = $scope.usersratingDisplay.length;
         console.log('length: '+totallength);

 // console.log("cnt"+$scope.usersratingDisplay[0].t_counts);
 //  console.log("rat"+$scope.usersratingDisplay[0].rating);
 //  console.log("cnt"+$scope.usersratingDisplay[1].t_counts);
 //  console.log("rat"+$scope.usersratingDisplay[1].rating);
 //   console.log("cnt"+$scope.usersratingDisplay[2].t_counts);
 //  console.log("rat"+$scope.usersratingDisplay[2].rating);
        
         var countsum=0;
         for(var i=0;i<totallength;i++){
         countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);

        //console.log($scope.usersratingDisplay[i].t_counts);     
       }
       for(var i=0;i<totallength;i++){
         //countsum = parseInt(countsum) + parseInt($scope.usersratingDisplay[i].t_counts);
         //var usrrat 
        $scope.usersratingDisplay[i].t_counts = parseInt($scope.usersratingDisplay[i].t_counts * 100)/parseInt(countsum);
       
        console.log("per"+$scope.usersratingDisplay[i].t_counts); 
        console.log("rate"+$scope.usersratingDisplay[i].rating);    
       }  
      // $scope.avgrating = parseInt(totalsum)/parseInt(totallength);
      console.log('countsum: '+countsum);
      

      // console.log($scope.avgrating);
     
    });





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
