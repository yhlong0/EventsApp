eventsApp.factory('eventData', function(){
	return {
		event: {
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
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				},
				{
					name: 'Scope for fun',
					creatorName: 'John Smith',
					duration: 2,
					level: 'Intermediate',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				},
				{
					name: 'Well behave controller',
					creatorName: 'test',
					duration: 4,
					level: 'Introductory',
					abstract: 'In this session you will balabala',
					upVoteCount: 0
				}
			]
		}
	};
});