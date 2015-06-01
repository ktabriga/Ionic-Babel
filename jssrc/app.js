import {ChatsCtrl} from "ChatsCtrl";
import {Chats} from "Chats";
import {Rotas} from "Rotas";

angular.module('grin', ['ionic'])
  .run($ionicPlatform => {
    $ionicPlatform.ready(function() {
     
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });

  })
  .controller('DashCtrl', () => {})
  .controller('ChatsCtrl', ChatsCtrl)

.controller('ChatDetailCtrl', ($scope, $stateParams, Chats) => {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', $scope => {
  $scope.settings = {
    enableFriends: true
  };
})

.factory('Chats', Chats)
.config(Rotas);
