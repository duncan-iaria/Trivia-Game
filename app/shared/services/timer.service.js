angular.module( 'trivia' ).service( 'TimerService', function()
{
	var timerService = this;

	//array of things that need to know about timer events
	timerService.timeUpSubscribers = [];
	timerService.restartSubscribers = [];
	timerService.pauseSubscribers = [];

	//EVENT SUBSCRIPTION
	timerService.subscribeToTimeUp = function( tSubscriber )
	{
		timerService.timeUpSubscribers.push( tSubscriber );
	}

	timerService.unsubscribeToTimeUp = function( tSubscriber )
	{
		//console.log( "this is the man to remove " + timerService.timeUpSubscribers.indexOf( tSubscriber ) );
		timerService.timeUpSubscribers.splice( timerService.timeUpSubscribers.indexOf( tSubscriber ), 1 );
		//console.log( "time up subscribers : " + timerService.timeUpSubscribers );
	}

	timerService.subscribeToRestart = function( tSubscriber )
	{
		timerService.restartSubscribers.push( tSubscriber );
	}

	timerService.unsubscribeToRestart = function( tSubscriber )
	{
		timerService.restartSubscribers.splice( timerService.restartSubscribers.indexOf( tSubscriber ), 1 );
	}

	timerService.subscribeToPause = function( tSubscriber )
	{
		timerService.pauseSubscribers.push( tSubscriber );
	}

	timerService.unsubscribeToPause = function( tSubscriber )
	{
		timerService.pauseSubscribers.splice( timerService.pauseSubscribers.indexOf( tSubscriber ), 1 );
	}

	//ACTIONS
	timerService.timeUp = function()
	{
		for( var i = 0; i < timerService.timeUpSubscribers.length; i++ )
		{
			timerService.timeUpSubscribers[i].onTimeUp();
		}
	}

	timerService.restart = function()
	{
		for( var i = 0; i < timerService.restartSubscribers.length; i++ )
		{
			timerService.restartSubscribers[i].onRestart();
		}
	}

	timerService.pause = function()
	{
		for( var i = 0; i < timerService.pauseSubscribers.length; i++ )
		{
			timerService.pauseSubscribers[i].onPause();
		}
	}
});