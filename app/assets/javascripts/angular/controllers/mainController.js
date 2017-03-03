app.controller('MainController', [
    '$scope', 'posts', function($scope, posts) {

      $scope.posts = posts.posts;

      $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          comments: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      $scope.upvotePost = function(post) {
        post.upvotes += 1;
      }
    },
    ]);
