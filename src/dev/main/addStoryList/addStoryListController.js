var addStoryListControler = function ($scope, addStoryListService) {

    //$('textarea').val()
    
    $scope.submit = function(e){
        // put to run if time left
        $scope.user = JSON.parse(sessionStorage.user);

        var data = {};
        e.preventDefault();

        // array of story items
        data.storyItemNames = addStoryListService.prepareStoryListItems($scope.storyList.storyLists);
        data.sessionName = $scope.storyList.sessionName;
        data.numOfVoters = $scope.storyList.numOfVoters;
        data.creator = $scope.user;

        addStoryListService.createStoryList(data)
        .then(function success(response) {
            resolve(response);
            // return back to home
            window.location = window.location.origin + '/home';
        }, function error(errResponse) {
            reject(errResponse);
        });
    };
};

angular.module('addStory.list')
.controller('addStoryListControler', ['$scope', 'addStoryListService', addStoryListControler]);
