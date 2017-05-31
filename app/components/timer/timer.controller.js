
function TimerController( $interval )
{
	var controller = this;

	controller.isEnabled = true;
	controller.timeLimit = 25;
	controller.currentTime = controller.timeLimit;
	controller.timerInterval;
	
	//METHODS
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
		console.log( "well you fucked up" );
		controller.isEnabled = false;
		$interval.cancel( controller.timerInterval );
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

	controller.startTimer();
}