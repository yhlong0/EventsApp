'use strict'

eventsApp.controller('EventController', 
	function EventController($scope){
		
		$scope.sortorder = 'name';
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: '6565 McCallum Blvd',
				city: 'Dallas',
				province: 'TX'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directive Masterclass',
					creatorName: 'Hailong Yang',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				},
				{
					name: 'Scope for fun',
					creatorName: 'John Smith',
					duration: '30 mins',
					level: 'Intermediate',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				},
				{
					name: 'Well behave controller',
					creatorName: 'test',
					duration: '2 hours',
					level: 'Introductory',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				}
			]
		}

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};	

	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};
});