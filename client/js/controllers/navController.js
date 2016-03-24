myApp.controller('navController', ['$scope', '$location', function($scope, $location){
    
    $scope.isCollapsed = true;
    
    $scope.isActive = function(destination) {
        return destination === $location.path();
    }
    
}])