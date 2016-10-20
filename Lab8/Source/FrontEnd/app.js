/**
 * Created by bn4n5 on 10/18/2016.
 */
var app=angular.module("calculate",[]);
app.controller("calculatectrl",function ($scope,$http) {
    $scope.bmi = function () {
        var height=$scope.h;
        var weight=$scope.w;



        var words = $http.get("http://localhost:8080/RESTExample/restexample/bytes/5");
        words.success(function (data) {
            console.log(data);
            $scope.cal={"kilo":data.kilo,"byte":data.byte,"bits":data.bits,"nibble":data.nibble};

        });
    }
});
