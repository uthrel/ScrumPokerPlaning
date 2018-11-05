var authenticationController = function ($scope, $log, $location, authenticationService) {

    $scope.signIn = function(e){
        e.preventDefault();
        if($scope.user !== undefined){
            $log.info($scope.user.mail);
            if(authenticationService.checkIfUserMailExists($scope.user.mail)){
                sessionStorage.user = JSON.stringify($scope.user.mail);
                window.location = window.location.origin + '/home';
            }
            else {
                // Unnecessary with DB connection for trial purposes
                window.location = window.location.origin + '/home';
                sessionStorage.user = JSON.stringify($scope.user.mail);

                $('#email').addClass('is-invalid');
                $('#email').on( "focus", function(){
                    $('#email').removeClass('is-invalid'); 
                }); 
            }
        }
    };

};

angular.module('main.auth', ['authentication'])
.controller('authenticationController', ['$scope', '$log', '$location', 'authenticationService', authenticationController]);
