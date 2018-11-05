var app = angular.module('ScrumPlanner', ['authentication']);

app.controller("scrumPlannerController",['$log', '$scope', 'authenticationService', function($log, $scope, authenticationService){
    $scope.clickHandler = function() {
        $log.error("this");
        authenticationService.nice();
    };
    
}]);
