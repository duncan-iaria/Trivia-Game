
function TimerController( $interval, TimerService )
{
	var controller = this;

	controller.isEnabled = true;
	controller.timeLimit = 4;
	controller.currentTime = controller.timeLimit;
	controller.timerInterval;
	
	//METHODS
	controller.$onInit = function()
	{
		controller.startTimer();

		//subcribe to events
		TimerService.subscribeToRestart( controller );
		TimerService.subscribeToPause( controller );
	}

	controller.$onDestroy = function()
	{
		if( controller.timerInterval != null )
		{
			$interval.cancel( controller.timerInterval );
		}

		//unsub to events
		TimerService.unsubscribeToRestart( controller );
		TimerService.unsubscribeToPause( controller );
	}

	controller.startTimer = function()
	{
		//clear interval if it's already running
		if( controller.timerInterval != null )
		{
			$interval.cancel( controller.timerInterval );
		}

		//start stuff
		controller.isEnabled = true;
		controller.currentTime = controller.timeLimit;
		controller.timerInterval = $interval( controller.tick, 1000 );
	}

	controller.tick = function()
	{
		//decrement the time limit if it's on
		if( controller.isEnabled )
		{
			controller.currentTime--;
		}

		//check if its zero'd out
		if( controller.currentTime === 0 )
		{
			controller.timeUp();
		}
	}

	controller.timeUp = function()
	{
		//console.log( "well you fucked up" );
		controller.isEnabled = false;
		$interval.cancel( controller.timerInterval );
		TimerService.timeUp();
	}

	//CONTROLS
	//for pausing the timer
	controller.pause = function()
	{
		//only paused if it's currently running
		if( controller.isEnabled )
		{
			controller.isEnabled = false;
			if( controller.timerInterval != null )
			{
				$interval.cancel( controller.timerInterval );
			}
		}
	}

	//for resuming the timer after pause
	controller.resume = function()
	{
		//only resume if it's not currently running
		if( !controller.isEnabled )
		{
			controller.isEnabled = true;
			controller.timerInterval = $interval( controller.tick, 1000 );
		}
	}

	//EVENTS
	//called from TimerService
	controller.onRestart = function()
	{
		controller.startTimer();
	}

	controller.onPause = function()
	{
		controller.pause();
	}
}