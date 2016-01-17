twentySixApp.controller('twentySixController', ['$scope', '$http', function ($scope, $http) {

	$scope.lang 	 = [];
	$scope.menu  	 = {};
	$scope.paragraph = "";

	$scope.enBold	 = "en boldLang";
	$scope.frBold	 = "fr";


	$http.get("assets/json/lang_en.json").success(function(data) {
		$scope.lang.en 	 = data;
		$scope.menu  	 = data.menu;
		$scope.paragraph = data.paragraph;
	});

	$http.get("assets/json/lang_fr.json").success(function(data) {
		$scope.lang.fr = data;
	});

	$scope.toFr = function() {
		$scope.menu 	 = $scope.lang.fr.menu;
		$scope.paragraph = $scope.lang.fr.paragraph;
		$scope.enBold	 = "";
		$scope.frBold	 = "boldLang";
	}

	$scope.toEn = function() {
		$scope.menu 	 = $scope.lang.en.menu;
		$scope.paragraph = $scope.lang.en.paragraph;
		$scope.enBold	 = "boldLang";
		$scope.frBold	 = "";
	}

}]);