define('Chats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.Chats = Chats;

  function Chats() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Catabrigas',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
      all: function all() {
        return chats;
      },
      remove: function remove(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function get(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  }
});
define("ChatsCtrl", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChatsCtrl = ChatsCtrl;
  ChatsCtrl.$inject = ["$scope", "Chats"];

  function ChatsCtrl($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    $scope.$on("$ionicView.enter", function (e) {});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      return Chats.remove(chat);
    };
  }
});
define("Rotas", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Rotas = Rotas;
  Rotas.$inject = ["$stateProvider", "$urlRouterProvider"];

  function Rotas($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state("tab.dash", {
      url: "/dash",
      views: {
        "tab-dash": {
          templateUrl: "templates/tab-dash.html",
          controller: "DashCtrl"
        }
      }
    }).state("tab.chats", {
      url: "/chats",
      views: {
        "tab-chats": {
          templateUrl: "templates/tab-chats.html",
          controller: "ChatsCtrl"
        }
      }
    }).state("tab.chat-detail", {
      url: "/chats/:chatId",
      views: {
        "tab-chats": {
          templateUrl: "templates/chat-detail.html",
          controller: "ChatDetailCtrl"
        }
      }
    }).state("tab.account", {
      url: "/account",
      views: {
        "tab-account": {
          templateUrl: "templates/tab-account.html",
          controller: "AccountCtrl"
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise("/tab/dash");
  }
});
define("app", ["exports", "ChatsCtrl", "Chats", "Rotas"], function (exports, _ChatsCtrl, _Chats, _Rotas) {
  "use strict";

  angular.module("grin", ["ionic"]).run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  }).controller("DashCtrl", function () {}).controller("ChatsCtrl", _ChatsCtrl.ChatsCtrl).controller("ChatDetailCtrl", function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }).controller("AccountCtrl", function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }).factory("Chats", _Chats.Chats).config(_Rotas.Rotas);
});
//# sourceMappingURL=all.js.map