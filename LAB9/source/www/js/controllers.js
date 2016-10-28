angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
      $scope.data = {};

      $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
          $state.go('tab.dash');
        }).error(function(data) {
          var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
          });
        });
      }
    })

    .controller('RegisterCtrl',function($scope, $state)
    {
        $scope.register = function () {
            $state.go('tab.dash');
        }

    })
    .controller('MainCtrl',function($scope,  $state)
    {

        $scope.login1 = function() {
            $state.go('login');

        }

        $scope.register1 = function() {
            $state.go('register');
        }
    })




.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
        fetch();
    });

    $scope.search = "Sherlock Holmes";
    var msg = new SpeechSynthesisUtterance('Tags related to the given image are'+ $scope.search);
    window.speechSynthesis.speak(msg);

    function fetch(){
        $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
            .then(function(response){ $scope.details = response.data; });
        $http.get("http://www.omdbapi.com/?s=" + $scope.search)
            .then(function(response){ $scope.related = response.data; });


      //document.getElementByName('itext').innerHTML = itext.toString().replace(/,/g, ', ');
        //var msg = new SpeechSynthesisUtterance('Tags related to the given image are'+itext);
        //window.speechSynthesis.speak(msg);

    }

    $scope.update = function(movie){
        $scope.search = movie.Title;
      var msg = new SpeechSynthesisUtterance('Tags related to the given image are'+ $scope.search);
      window.speechSynthesis.speak(msg);
    };

    $scope.select = function(){
        this.setSelectionRange(0, this.value.length);
    }

    //document.getElementByName('itext').value= itext.toString().replace(/,/g, ', ');
    //var msg = new SpeechSynthesisUtterance('Tags related to the given image are'+itext);
    //window.speechSynthesis.speak(msg);
});



