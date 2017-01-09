
var app = angular.module('musicApp',['ngRoute'])
    app.controller('musicStuff', musicFunction);

musicFunction..$inject =['$scope'];

function musicFunction($scope){
  var mCtl = this;
  mCtl.showSearch = false;
   mCtl.show = function(){
     mCtl.showSearch = true;
    }
}
