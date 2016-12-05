'use strict';

/**
 * @ngdoc function
 * @name employeeManagementApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeManagementApp
 */
angular.module('employeeManagementApp')
  .controller('MainCtrl',['$http', '$location', function ($http,$location) {
   
var self = this;
function init(){
	self.cardDisplayModeEnabled = true;
	self.listDisplayModeEnabled = false;
	self.detailDisplayModeEnabled = false;
	self.displayMode ={
		'card':'card',
		'list':'list',
		'details':'details'
	};
$http.get('/scripts/employeeDetails.js').success(function(response){
	self.employeeDetails = response;
});
}
init();

self.changeDisplayMode = function(displayMode){
   if(displayMode === 'card'){
               self.cardDisplayModeEnabled = true;
               self.listDisplayModeEnabled = false;
               self.detailDisplayModeEnabled = false;
   }else if(displayMode === 'list'){
                self.listDisplayModeEnabled = true;
                self.cardDisplayModeEnabled = false;
                self.detailDisplayModeEnabled = false;
    }else if(displayMode === 'details'){
                self.detailDisplayModeEnabled = true;
                self.cardDisplayModeEnabled = false;
                self.listDisplayModeEnabled = false;
                   }
            
};

self.addEmployee = function(employee,department,title,dob,doj){
  var request = $http({
                    method: "post",
                    url: "/scripts/employeeDetails.js",
                    data: {
                        employeeName: employee,
                        DOB: dob,
                        DOJ: doj,
                        Department: department,
                        Title:title
                    }
                });
   request.success(
                    function(response) {
                      self.employeeDetails = response;
                        $location.path('#');
                    }
                );
   $location.path('#');


};

  }]);
