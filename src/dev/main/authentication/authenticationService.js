var authenticationService = function ($http, $log, USER_INFO) { 

    // Check if entered mail exists in DB
    function checkIfUserMailExists(mail){
        getUserMail(mail).then(function(response){
            if(response.status){
                return true;
            }
            else {
                return false;
            }
        }, function(errResponse){
            return errResponse;
        });
    }

    function signIn(mail){
        var indata = {'mail': mail};
        // post to /signin
        $http.post(USER_INFO.SIGN_IN, indata).then(function success(response) {
            if(response.status){
                $log.info('Signed in!');
                return;
            }
            else {
                $log.info('Could not sign in!');
                return;
            }
        }, function error(errResponse) {
            $log.error(errResponse);
        });
    }

    // Get user mail from database
    function getUserMail(mail){
        return new Promise(function(resolve, reject){
            var indata = {'mail': mail};
            // get to /users 
            $http.get(`${USER_INFO.EMAIL}/${mail}`, indata).then(function success(response) {
                if(response !== undefined){
                    resolve(response);
                }
            }, function error(errResponse) {
                reject(errResponse);
            });
        }); 
    }

    // Set user mail to the database
    function setUserMail(mail){
        var indata = {'mail': mail};
        $http.post(USER_INFO.EMAIL, indata).then(function success(successMessage) {
            resolve(successMessage);
        }, function error(errResponse) {
            reject(errResponse);
        });
    }

    // Set username to the database
    function setUserName(username){
        var indata = {'username': username};
        $http.post(USER_INFO.NAME, indata).then(function success(successMessage) {
            resolve(successMessage);
        }, function error(errResponse) {
            reject(errResponse);
        });
    }
    
    // Get username from database
    function getUserName(mail){
        return new Promise(function(resolve, reject){
            var indata = {'mail': mail};
            $http.get(USER_INFO.NAME, indata).then(function success(name) {
                resolve(name);
            }, function error(errResponse) {
                reject(errResponse);
            });
        }); 
    }

    //Maybe later
    // Validate username
    /*function validateUserName(){

    }

    // Validate email address
    function validateEmail(){

    }*/

    return {
        checkIfUserMailExists: checkIfUserMailExists,
        signIn: signIn,
        setUserName: setUserName,
        setUserMail: setUserMail,
        getUserName: getUserName,
    };
};

angular.module('authentication', [])
.service('authenticationService', ['$http', '$log', 'USER_INFO', authenticationService])
.constant('USER_INFO', {
    EMAIL: '/users',
    SIGN_IN: '/signin'
  });