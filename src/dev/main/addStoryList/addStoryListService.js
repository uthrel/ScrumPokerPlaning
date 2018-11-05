var addStoryListService = function ($http, STORY_LIST_CONST) { 

    function createStoryList(data) {
        return new Promise(function (resolve, reject) {
            // storyItem: name, sp, status, story_id, votes
            // story: session_name, creator, story_items
            var indata = { 'data': data };
            $http.post(STORY_LIST_CONST.STORY, indata).then(function success(response) {
                resolve(response);
            }, function error(errResponse) {
                reject(errResponse);
            });
        });
    }

    // For getting the storylists line by line from the text area
    function prepareStoryListItems(storyList){
        var lines = storyList.split('\n');
        return lines;
    }
    
    return {
        createStoryList: createStoryList,
        prepareStoryListItems: prepareStoryListItems
    };
};

angular.module('addStory.list', [])
.service('addStoryListService', ['$http', 'STORY_LIST_CONST', addStoryListService])
.constant('STORY_LIST_CONST', {
    STORY: '/story',
  });