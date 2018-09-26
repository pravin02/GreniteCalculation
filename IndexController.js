var mainApp = angular.module('mainApp', []);

mainApp.controller('IndexController', ['$scope', function ($scope) {
    $scope.appName = 'Testing of ceramic calculations';
    $scope.products = getProducts();
    $scope.types = getTypes();
    $scope.product = { quantity: 1, perSqFtCost: 1, amount: 0 };
    const sqftTable = getGreniteSqFtTable();

    $scope.calculate = function (product) {
        let widthInSqFt = getSqFtFromInches(product.widthInInches);
        let heightInSqFt = getSqFtFromInches(product.heightInInches);
        product.areaInSqFt = product.quantity * widthInSqFt * heightInSqFt;
        product.amount = product.areaInSqFt * product.perSqFtCost;
    }

}])