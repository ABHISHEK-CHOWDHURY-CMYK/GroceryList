var app = angular.module("groceryListApp", ["ngRoute"]);

angular.
    module('groceryListApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
            .when("/", {
                templateUrl: "views/groceryList.html",
                controller: "GroceryListItemController",
            })
            .when("/addItem", {
                templateUrl: "views/addItem.html",
                controller: "GroceryListItemController"
            })
            .otherwise('/');
        }
    ]);

// app.config(function($routeProvider){
//     $routeProvider
//     .when("/",{
//         templateUrl: "views/groceryList.html",
//         controller: "GroceryListItemController",
//     })
//     .when("/addItem",{
//         templateUrl: "views/addItem.html",
//         controller: "GroceryListItemController"
//     })
// })

app.controller("HomeController", ["$scope", function($scope){
    $scope.appTitle = "Grocery List";
}]);

app.controller("GroceryListItemController", ["$scope", function($scope){
    $scope.groceryItems = [
        { itemName:"milk" },
        { itemName: "milk" },
        { itemName: "milk" },
        { itemName: "milk" },
        { itemName: "milk" },
        { itemName: "milk" },
        { itemName: "milk" }
    ]
}]);
