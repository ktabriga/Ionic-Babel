(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
  $scope.$on('$ionicView.enter', function (e) {});

  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    return Chats.remove(chat);
  };
}

},{}],3:[function(require,module,exports){
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
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
}

},{}],4:[function(require,module,exports){
"use strict";

var _ChatsCtrl = require("./ChatsCtrl");

var _Chats = require("./Chats");

var _Rotas = require("./Rotas");

angular.module('grin', ['ionic']).run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
}).controller('DashCtrl', function () {}).controller('ChatsCtrl', _ChatsCtrl.ChatsCtrl).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}).controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
}).factory('Chats', _Chats.Chats).config(_Rotas.Rotas);

},{"./Chats":1,"./ChatsCtrl":2,"./Rotas":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQ2F0YWJyaWdhL1Byb2pldG9zL0lvbmljLUVzNi9qc3NyYy9DaGF0cy5qcyIsIi9Vc2Vycy9DYXRhYnJpZ2EvUHJvamV0b3MvSW9uaWMtRXM2L2pzc3JjL0NoYXRzQ3RybC5qcyIsIi9Vc2Vycy9DYXRhYnJpZ2EvUHJvamV0b3MvSW9uaWMtRXM2L2pzc3JjL1JvdGFzLmpzIiwiL1VzZXJzL0NhdGFicmlnYS9Qcm9qZXRvcy9Jb25pYy1FczYvanNzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBaUIsS0FBSyxHQUFMLEtBQUs7O0FBQWQsU0FBUyxLQUFLLEdBQUc7Ozs7QUFJdkIsTUFBSSxLQUFLLEdBQUcsQ0FBQztBQUNYLE1BQUUsRUFBRSxDQUFDO0FBQ0wsUUFBSSxFQUFFLGdCQUFnQjtBQUN0QixZQUFRLEVBQUUsa0JBQWtCO0FBQzVCLFFBQUksRUFBRSxzRUFBc0U7R0FDN0UsRUFBQztBQUNBLE1BQUUsRUFBRSxDQUFDO0FBQ0wsUUFBSSxFQUFFLFVBQVU7QUFDaEIsWUFBUSxFQUFFLGVBQWU7QUFDekIsUUFBSSxFQUFFLDBEQUEwRDtHQUNqRSxFQUFDO0FBQ0EsTUFBRSxFQUFFLENBQUM7QUFDTCxRQUFJLEVBQUUsaUJBQWlCO0FBQ3ZCLFlBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBSSxFQUFFLHVFQUF1RTtHQUM5RSxFQUFFO0FBQ0QsTUFBRSxFQUFFLENBQUM7QUFDTCxRQUFJLEVBQUUsZ0JBQWdCO0FBQ3RCLFlBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBSSxFQUFFLHNFQUFzRTtHQUM3RSxFQUFFO0FBQ0QsTUFBRSxFQUFFLENBQUM7QUFDTCxRQUFJLEVBQUUsaUJBQWlCO0FBQ3ZCLFlBQVEsRUFBRSxnQ0FBZ0M7QUFDMUMsUUFBSSxFQUFFLHNFQUFzRTtHQUM3RSxDQUFDLENB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QkFBYyxDQUFDLEtBQUssQ0FBQyxZQUFXOztBQUU5QixRQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQy9FLGFBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pEO0FBQ0QsUUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO0FBQ3BCLGVBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQy9CO0dBQ0YsQ0FBQyxDQUFDO0NBRUosQ0FBQyxDQUNELFVBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBTSxFQUFFLENBQUMsQ0FDaEMsVUFBVSxDQUFDLFdBQVcsYUFsQmpCLFNBQVMsQ0FrQm9CLENBRXBDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFLO0FBQzdELFFBQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDOUMsQ0FBQyxDQUVELFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDbkMsUUFBTSxDQUFDLFFBQVEsR0FBRztBQUNoQixpQkFBYSxFQUFFLElBQUk7R0FDcEIsQ0FBQztDQUNILENBQUMsQ0FFRCxPQUFPLENBQUMsT0FBTyxTQTdCUixLQUFLLENBNkJXLENBQ3ZCLE1BQU0sUUE3QkMsS0FBSyxDQTZCQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiBleHBvcnQgZnVuY3Rpb24gQ2hhdHMoKSB7XG4gIC8vIE1pZ2h0IHVzZSBhIHJlc291cmNlIGhlcmUgdGhhdCByZXR1cm5zIGEgSlNPTiBhcnJheVxuXG4gIC8vIFNvbWUgZmFrZSB0ZXN0aW5nIGRhdGFcbiAgdmFyIGNoYXRzID0gW3tcbiAgICBpZDogMCxcbiAgICBuYW1lOiAnQmVuIENhdGFicmlnYXMnLFxuICAgIGxhc3RUZXh0OiAnWW91IG9uIHlvdXIgd2F5PycsXG4gICAgZmFjZTogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy81MTQ1NDk4MTE3NjUyMTExMzYvOVNnQXVIZVkucG5nJ1xuICB9LHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnTWF4IEx5bngnLFxuICAgIGxhc3RUZXh0OiAnSGV5LCBpdFxcJ3MgbWUnLFxuICAgIGZhY2U6ICdodHRwczovL2F2YXRhcnMzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzExMjE0P3Y9MyZzPTQ2MCdcbiAgfSx7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ0FkYW0gQnJhZGxleXNvbicsXG4gICAgbGFzdFRleHQ6ICdJIHNob3VsZCBidXkgYSBib2F0JyxcbiAgICBmYWNlOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzQ3OTA5MDc5NDA1ODM3OTI2NC84NFRLal9xYS5qcGVnJ1xuICB9LCB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ1BlcnJ5IEdvdmVybm9yJyxcbiAgICBsYXN0VGV4dDogJ0xvb2sgYXQgbXkgbXVrbHVrcyEnLFxuICAgIGZhY2U6ICdodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvNTk4MjA1MDYxMjMyMTAzNDI0LzNqNUhVWE1ZLnBuZydcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6ICdNaWtlIEhhcnJpbmd0b24nLFxuICAgIGxhc3RUZXh0OiAnVGhpcyBpcyB3aWNrZWQgZ29vZCBpY2UgY3JlYW0uJyxcbiAgICBmYWNlOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzU3ODIzNzI4MTM4NDg0MTIxNi9SM2FlMW42MS5wbmcnXG4gIH1dO1xuXG4gIHJldHVybiB7XG4gICAgYWxsKCkge1xuICAgICAgcmV0dXJuIGNoYXRzO1xuICAgIH0sXG4gICAgcmVtb3ZlKGNoYXQpIHtcbiAgICAgIGNoYXRzLnNwbGljZShjaGF0cy5pbmRleE9mKGNoYXQpLCAxKTtcbiAgICB9LFxuICAgIGdldChjaGF0SWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoYXRzW2ldLmlkID09PSBwYXJzZUludChjaGF0SWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYXRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG59IiwiQ2hhdHNDdHJsLiRpbmplY3QgPSBbXCIkc2NvcGVcIiwgXCJDaGF0c1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRzQ3RybCgkc2NvcGUsIENoYXRzKSB7XG4gIC8vIFdpdGggdGhlIG5ldyB2aWV3IGNhY2hpbmcgaW4gSW9uaWMsIENvbnRyb2xsZXJzIGFyZSBvbmx5IGNhbGxlZFxuICAvLyB3aGVuIHRoZXkgYXJlIHJlY3JlYXRlZCBvciBvbiBhcHAgc3RhcnQsIGluc3RlYWQgb2YgZXZlcnkgcGFnZSBjaGFuZ2UuXG4gIC8vIFRvIGxpc3RlbiBmb3Igd2hlbiB0aGlzIHBhZ2UgaXMgYWN0aXZlIChmb3IgZXhhbXBsZSwgdG8gcmVmcmVzaCBkYXRhKSxcbiAgLy8gbGlzdGVuIGZvciB0aGUgJGlvbmljVmlldy5lbnRlciBldmVudDpcbiAgLy9cbiAgJHNjb3BlLiRvbignJGlvbmljVmlldy5lbnRlcicsIGUgPT4ge30pOyBcblxuICAkc2NvcGUuY2hhdHMgPSBDaGF0cy5hbGwoKTtcbiAgJHNjb3BlLnJlbW92ZSA9IGNoYXQgPT4gQ2hhdHMucmVtb3ZlKGNoYXQpXG5cbn0iLCJSb3Rhcy4kaW5qZWN0ID0gW1wiJHN0YXRlUHJvdmlkZXJcIiwgXCIkdXJsUm91dGVyUHJvdmlkZXJcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3Rhcygkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgLy8gSW9uaWMgdXNlcyBBbmd1bGFyVUkgUm91dGVyIHdoaWNoIHVzZXMgdGhlIGNvbmNlcHQgb2Ygc3RhdGVzXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyXG4gIC8vIFNldCB1cCB0aGUgdmFyaW91cyBzdGF0ZXMgd2hpY2ggdGhlIGFwcCBjYW4gYmUgaW4uXG4gIC8vIEVhY2ggc3RhdGUncyBjb250cm9sbGVyIGNhbiBiZSBmb3VuZCBpbiBjb250cm9sbGVycy5qc1xuICAkc3RhdGVQcm92aWRlclxuXG4gIC8vIHNldHVwIGFuIGFic3RyYWN0IHN0YXRlIGZvciB0aGUgdGFicyBkaXJlY3RpdmVcbiAgICAuc3RhdGUoJ3RhYicsIHtcbiAgICB1cmw6IFwiL3RhYlwiLFxuICAgIGFic3RyYWN0OiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy90YWJzLmh0bWxcIlxuICB9KVxuXG4gIC8vIEVhY2ggdGFiIGhhcyBpdHMgb3duIG5hdiBoaXN0b3J5IHN0YWNrOlxuXG4gIC5zdGF0ZSgndGFiLmRhc2gnLCB7XG4gICAgdXJsOiAnL2Rhc2gnLFxuICAgIHZpZXdzOiB7IFxuICAgICAgJ3RhYi1kYXNoJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90YWItZGFzaC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hDdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAuc3RhdGUoJ3RhYi5jaGF0cycsIHtcbiAgICAgIHVybDogJy9jaGF0cycsXG4gICAgICB2aWV3czoge1xuICAgICAgICAndGFiLWNoYXRzJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3RhYi1jaGF0cy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhdHNDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3RhYi5jaGF0LWRldGFpbCcsIHtcbiAgICAgIHVybDogJy9jaGF0cy86Y2hhdElkJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICd0YWItY2hhdHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvY2hhdC1kZXRhaWwuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0NoYXREZXRhaWxDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAuc3RhdGUoJ3RhYi5hY2NvdW50Jywge1xuICAgIHVybDogJy9hY2NvdW50JyxcbiAgICB2aWV3czoge1xuICAgICAgJ3RhYi1hY2NvdW50Jzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy90YWItYWNjb3VudC5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0FjY291bnRDdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gaWYgbm9uZSBvZiB0aGUgYWJvdmUgc3RhdGVzIGFyZSBtYXRjaGVkLCB1c2UgdGhpcyBhcyB0aGUgZmFsbGJhY2tcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3RhYi9kYXNoJyk7XG5cbn0iLCJpbXBvcnQge0NoYXRzQ3RybH0gZnJvbSBcIi4vQ2hhdHNDdHJsXCI7XG5pbXBvcnQge0NoYXRzfSBmcm9tIFwiLi9DaGF0c1wiO1xuaW1wb3J0IHtSb3Rhc30gZnJvbSBcIi4vUm90YXNcIjtcblxuYW5ndWxhci5tb2R1bGUoJ2dyaW4nLCBbJ2lvbmljJ10pXG4gIC5ydW4oJGlvbmljUGxhdGZvcm0gPT4ge1xuICAgICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICBcbiAgICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcbiAgICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAgIFN0YXR1c0Jhci5zdHlsZUxpZ2h0Q29udGVudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pXG4gIC5jb250cm9sbGVyKCdEYXNoQ3RybCcsICgpID0+IHt9KVxuICAuY29udHJvbGxlcignQ2hhdHNDdHJsJywgQ2hhdHNDdHJsKVxuXG4uY29udHJvbGxlcignQ2hhdERldGFpbEN0cmwnLCAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIENoYXRzKSA9PiB7XG4gICRzY29wZS5jaGF0ID0gQ2hhdHMuZ2V0KCRzdGF0ZVBhcmFtcy5jaGF0SWQpO1xufSlcblxuLmNvbnRyb2xsZXIoJ0FjY291bnRDdHJsJywgJHNjb3BlID0+IHtcbiAgJHNjb3BlLnNldHRpbmdzID0ge1xuICAgIGVuYWJsZUZyaWVuZHM6IHRydWVcbiAgfTtcbn0pXG5cbi5mYWN0b3J5KCdDaGF0cycsIENoYXRzKVxuLmNvbmZpZyhSb3Rhcyk7XG4iXX0=
