twentySixApp.controller('twentySixController', ['$scope', '$http', function ($scope, $http) {

	$scope.lang  = [];
	$scope.menu  = {};
	$scope.about = "";


	$http.get("assets/json/lang_en.json").success(function(data) {
		$scope.lang.en = data;

		$scope.menu  = data.menu;
		$scope.about = data.about;
	});


}]);