angular.module('angularNews', [])
  .controller('MainController', [
    '$scope', function($scope) {

      $scope.test = "Hello, World!";

      $scope.posts = [
        { title: 'post one', comments: 1, upvotes: 0 },
        { title: 'post two', comments: 12, upvotes: 0 },
        { title: 'post three', comments: 3, upvotes: 0 },
        { title: 'post four', comments: 17, upvotes: 0 },
        { title: 'post five', comments: 5, upvotes: 0 },
        { title: 'post six', comments: 7, upvotes: 0 },
      ];

      $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({title: $scope.title, comments: 0});
        $scope.title = '';
      };

      $scope.upvotePost = function(post) {
        post.upvotes += 1;
      }
    },
    ]);
