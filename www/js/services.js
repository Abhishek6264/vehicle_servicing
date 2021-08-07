angular.module('starter.services', [])


.factory('commonService', function() {
  
  var customerDetail;
  var setCustomer = function(data){
      customerDetail = data;
  }
  var getCustomer = function(){
      return customerDetail;
  }


  var sellItemToCustomer;
  var setSellCustomer = function(data){
    sellItemToCustomer =  data;
  }
  var getSellCustomer =function(){
    return sellItemToCustomer;
  }



  return {
    setCustomer: setCustomer,
    getCustomer: getCustomer,    
    setSellCustomer: setSellCustomer,
    getSellCustomer: getSellCustomer
    
  };
});