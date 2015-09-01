function DashboardCtrl($scope, $filter, ngTableParams, $timeout){
	$scope.contentTitle = "You do not have any active campagins. Create One:";
	$scope.datas = [
		{
			src: 'img/dashboard/post_icon.png',
			title: 'Post'
		},
		{
			src: 'img/dashboard/deal_icon.png',
			title: 'Deal'
		},
		{
			src: 'img/dashboard/event_icon.png',
			title: 'Event'
		},
		{
			src: 'img/dashboard/listing_icon.png',
			title: 'Listing'
		},
		{
			src: 'img/dashboard/announcement_icon.png',
			title: 'Announcement'
		},
		{
			src: 'img/dashboard/newsletter_icon.png',
			title: 'Newsletter'
		}
	];
	$scope.actContentTitle = "RECENT ACTIVITY";
}