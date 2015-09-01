/**
 * Created by Honzik on 5/28/2015.
 */
function CampaignsCtrl($scope, $filter, ngTableParams, $timeout, $window, $location){
    $scope.title = "Campaign";
    $scope.datas = [
        {
            background : 'img/campaigns/bg-1.png',
            icon : 'img/campaigns/icon-1.png',
            name : 'Post lorem ipsum name',
            posted : 'Drafted 05/05/2015 at 14:45',
            content : 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.' + decodeURI('<a>Cras ultricies ligula</a>') + 'sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.' + decodeURI('<a>#hashtag</a>'),
            class : 'btn-unpublish',
            button : 'UN-PUBLISHED'
        },
        {
            background : 'img/campaigns/bg-2.png',
            icon : 'img/campaigns/icon-2.png',
            name : 'Post lorem ipsum name',
            posted : 'Drafted 05/05/2015 at 14:45',
            content : decodeURI('Quisque velit nisi, pretium ut lacinia in, elementum id enim. <a>Cras ultricies ligula</a> sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. <a>#hashtag</a>'),
            class : 'btn-publish',
            button : 'PUBLISHED'
        },
        {
            background : 'img/campaigns/bg-3.png',
            icon : 'img/campaigns/icon-3.png',
            name : 'Post lorem ipsum name',
            posted : 'Drafted 05/05/2015 at 14:45',
            content : decodeURI('Quisque velit nisi, pretium ut lacinia in, elementum id enim. <a>Cras ultricies ligula</a> sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. <a>#hashtag</a>'),
            class : 'btn-publish',
            button : 'PUBLISHED'
        },
        {
            background : 'img/campaigns/bg-4.png',
            icon : 'img/campaigns/icon-4.png',
            name : 'Post lorem ipsum name',
            posted : 'Drafted 05/05/2015 at 14:45',
            content : decodeURI('Quisque velit nisi, pretium ut lacinia in, elementum id enim. <a>Cras ultricies ligula</a> sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. <a>#hashtag</a>'),
            class : 'btn-unpublish',
            button : 'UN-PUBLISHED'
        }
    ]

    /* New Campaigns */
    $scope.new_title = "NEW CAMPAIGN";
    $scope.infos = [
        {
            url: 'post',
            className: 'div-post',
            title: 'Post'
        },
        {
            url: 'announcement',
            className: 'div-announcement',
            title: 'Announcement'
        },
        {
            url: 'deal',
            className: 'div-deal',
            title: 'Deal'
        },
        {
            url: 'event',
            className: 'div-event',
            title: 'Event'
        }
    ]

    $scope.go = function ( path ) {
        $location.path( path );
    };
}