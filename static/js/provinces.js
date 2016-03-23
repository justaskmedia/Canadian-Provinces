var provinces = angular.module('provinces', []);
provinces.controller('ProvincesController', function($scope, $http, filterFilter) {
	
	$http.get('static/js/JSON/provinces.json')
       .then(function(res){
          $scope.listedProvinces = res.data.provinces;
          $scope.provinceData = $scope.listedProvinces;  
          console.log($scope.provinceData); 
          $scope.reverse = false;
          $scope.column = 'provinceName';

          $scope.setSort = function(column) {
          	$scope.reverse = !$scope.reverse;
          	$scope.column = column;
          };

          $scope.filterString = '';
          $scope.setFilter = function(value) {
          	$scope.provinceData = filterFilter($scope.listedProvinces, $scope.filterString) 
          };
        });
});