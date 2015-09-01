function IntegrationsCtrl($scope, $route, $filter, ngTableParams, $timeout){
	$scope.pageTitle = "Integration";
	$scope.datas = [
		{
			src: 'img/integration/google_icon.png',
			title: 'Google',
			content: 'Error monitoring and handling.'
		},
		{
			src: 'img/integration/twitter_icon.png',
			title: 'Twitter',
			content: 'App Stroe reviews delivered to Slack.'
		},
		{
			src: 'img/integration/facebook_icon.png',
			title: 'Facebook',
			content: 'Video conferences in your browser.'
		},
		{
			src: 'img/integration/linkedin_icon.png',
			title: 'Linkedin',
			content: 'Detailed metrics for Ruby on Rails apps.'
		},
		{
			src: 'img/integration/github_icon.png',
			title: 'Github',
			content: 'Communications and task management for teams.'
		}
	];
	/*$scope.datas1 = [
		{
			src: 'img/integration/air_icon.png',
			title: 'Airbrake-second',
			content: 'Error monitoring and handling.'
		},
		{
			src: 'img/integration/app_icon.png',
			title: 'App Review Monitor-second',
			content: 'App Stroe reviews delivered to Slack.'
		},
		{
			src: 'img/integration/appear_icon.png',
			title: 'appear.in-second',
			content: 'Video conferences in your browser.'
		},
		{
			src: 'img/integration/appsignal_icon.png',
			title: 'AppSignal-second',
			content: 'Detailed metrics for Ruby on Rails apps.'
		},
		{
			src: 'img/integration/asana_icon.png',
			title: 'Asana-second',
			content: 'Communications and task management for teams.'
		}
	];
	$scope.datas2 = [
		{
			src: 'img/integration/air_icon.png',
			title: 'Airbrake-third',
			content: 'Error monitoring and handling.'
		},
		{
			src: 'img/integration/app_icon.png',
			title: 'App Review Monitor-third',
			content: 'App Stroe reviews delivered to Slack.'
		},
		{
			src: 'img/integration/appear_icon.png',
			title: 'appear.in-third',
			content: 'Video conferences in your browser.'
		},
		{
			src: 'img/integration/appsignal_icon.png',
			title: 'AppSignal-third',
			content: 'Detailed metrics for Ruby on Rails apps.'
		},
		{
			src: 'img/integration/asana_icon.png',
			title: 'Asana-third',
			content: 'Communications and task management for teams.'
		}
	];*/
	$scope.contentOne = 'Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor	volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in	ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, at tellus.';
	$scope.contentTwo = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcuerat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere	blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.';

	$scope.addConf = function(title) {
		if (title == "Google") {
			$scope.datas1 = {
				src: 'img/integration/google_icon.png',
				title: 'Google',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Twitter") {
			$scope.datas1 = {
				src: 'img/integration/twitter_icon.png',
				title: 'Twitter',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Facebook") {
			$scope.datas1 = {
				src: 'img/integration/facebook_icon.png',
				title: 'Facebook',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Linkedin") {
			$scope.datas1 = {
				src: 'img/integration/linkedin_icon.png',
				title: 'Linkedin',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Github") {
			$scope.datas1 = {
				src: 'img/integration/github_icon.png',
				title: 'Github',
				content: 'Error monitoring and handling.'
			}
		}
	};

	$scope.addInte = function(title) {
		console.log("test");
		console.log(title);
		if (title == "Google") {
			$scope.datas2 = {
				src: 'img/integration/google_icon.png',
				title: 'Google',
				callbackURL: 'google',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Twitter") {
			$scope.datas2 = {
				src: 'img/integration/twitter_icon.png',
				title: 'Twitter',
				callbackURL: 'twitter',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Facebook") {
			$scope.datas2 = {
				src: 'img/integration/facebook_icon.png',
				title: 'Facebook',
				callbackURL: 'facebook',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Linkedin") {
			$scope.datas2 = {
				src: 'img/integration/linkedin_icon.png',
				title: 'Linkedin',
				callbackURL: 'linkedin',
				content: 'Error monitoring and handling.'
			}
		} else if (title == "Github") {
			$scope.datas2 = {
				src: 'img/integration/github_icon.png',
				title: 'Github',
				callbackURL: 'github',
				content: 'Error monitoring and handling.'
			}
		}
	};
}