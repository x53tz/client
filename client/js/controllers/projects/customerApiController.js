myApp.controller('customerApiController', ['$scope', '$route', 'Api', function($scope, $route, Api){
    $scope.form = {};
    $scope.customers = [];
    $scope.canUpdate = false;
    $scope.updateIndex = -1;
    
    
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
    
    $scope.delete = function(index){
        Api.Customer.delete({id: $scope.customers[index]._id}, function(data){
          $scope.customers.splice(index,1);  
        })
    };
    
    
    $scope.addToDatabase = function() {
        Api.Customer.save({}, $scope.form, function(data){
            $scope.form = {};
            $scope.customers.push(data);
        })
    };
    
    
    $scope.updateToDatabase = function() {
        //console.log("here:"+ $scope.updateIndex);

        
        Api.Customer.save({id: $scope.customers[$scope.updateIndex]._id}, $scope.form, function(data){
            console.log(data);
            
            var mycustomer = data;
            console.log("mycustomeris "+mycustomer);
            
            $scope.customers.push(
                {
                    firstname:$scope.form.firstname, 
                    lastname:$scope.form.lastname, 
                    phone:$scope.form.phone, 
                    address:{
                        street:$scope.form.address.street, 
                        city:$scope.form.address.city, 
                        state:$scope.form.address.state,
                        zip:$scope.form.address.zip
                    }
                    
                });
                
            
            $scope.form = {};
            //$scope.customers[$scope.updateIndex] = data;
            //$scope.customers.push(data);
            $route.reload();
        });
        
        
        
        //$scope.form = {};
        $scope.canUpdate = false;
        //$scope.$apply();
    };    
    
    
    
    $scope.restoreinform = function(index){
        
        Api.Customer.get({id: $scope.customers[index]._id}, function(data){
            $scope.form = data;
        });
        
        $scope.canUpdate = true;
        $scope.updateIndex = index;
    };

}]);
