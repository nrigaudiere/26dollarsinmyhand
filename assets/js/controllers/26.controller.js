twentySixApp.controller('twentySixController', ['$scope', '$http', function ($scope, $http) {

    $scope.lang 	 = [];
    $scope.slider	 = [];
    $scope.menu  	 = {};
    $scope.paragraph = "";
    $scope.live = "";

    $scope.enBold	 = "en boldLang";
    $scope.frBold	 = "fr";

    $scope.deviceWidth = getWidth();

    $http.get("assets/json/lang_en.json").success(function(data) {
        $scope.lang.en 	 = data;
        $scope.menu  	 = data.menu;
        $scope.paragraph = data.paragraph;
        $scope.live      = data.live;
    });

    $http.get("assets/json/lang_fr.json").success(function(data) {
        $scope.lang.fr = data;
    });

    $http.get("assets/json/slider.json").success(function(data) {

        if ($scope.deviceWidth <= 768) {
            $scope.slider.url = data.small.url;
            $scope.slider.thumbsUrl = data.small.thumbsUrl;
        } else {
            $scope.slider.url = data.normal.url;
            $scope.slider.thumbsUrl = data.normal.thumbsUrl;
        }
    });



    $scope.toFr = function() {
        $scope.menu 	 = $scope.lang.fr.menu;
        $scope.paragraph = $scope.lang.fr.paragraph;
        $scope.live      = $scope.lang.fr.live;
        $scope.enBold	 = "";
        $scope.frBold	 = "boldLang";
    }

    $scope.toEn = function() {
        $scope.menu 	 = $scope.lang.en.menu;
        $scope.paragraph = $scope.lang.en.paragraph;
        $scope.live      = $scope.lang.en.live;
        $scope.enBold	 = "boldLang";
        $scope.frBold	 = "";
    }

    function getWidth() {
        if (self.innerHeight) {
            return self.innerWidth;
        }

        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }

        if (document.body) {
            return document.body.clientWidth;
        }
    }


}]);