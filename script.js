(function () {
    var app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', function ($scope) {
      $scope.todos = [
        {
          title: '요가 수행',
          completed: false,
          createdAt: Date.now()
        },
        {
          title: '앵귤러 학습',
          completed: false,
          createdAt: Date.now()
        },
        {
          title: '운동하기',
          completed: true,
          createdAt: Date.now()
        }
      ];

      $scope.remove = function (todo) {
          //find todo index in todos
          var idx = $scope.todos.findIndex(function (item)  {
            return item.id === todo.id;
          })

          //remove from todos
          if(idx > -1)  {
            $scope.todos.splice(idx,1);
          }
      };

      $scope.add = function (newTodoTitle)  {
        alert(newTodoTitle);
      }
    }]
    );
})();