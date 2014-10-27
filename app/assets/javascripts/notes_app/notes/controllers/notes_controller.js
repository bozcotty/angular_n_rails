notesApp.controller('NotesCtrl', function($scope) {
  $scope.greeting = 'Hello World';

  $scope.alertGreeting = function() {
    alert($scope.greeting);
  };
});
