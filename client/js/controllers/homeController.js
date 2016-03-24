myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides = [{
        image: 'https://placeholdit.imgix.net/~text?txtsize=40&bg=E8117F&txtclr=000000&txt=Click%20the%20above%20tabs%20to%20start&w=800&h=400',
        link: "/about"
    },
    {
        image: 'https://placehold.it/800x400?text="Learn more about the App!"',
        link: "/about"
    }]
    
}]);