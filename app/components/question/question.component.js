angular.module( 'trivia' ).component( 'question', 
{
	templateUrl: 'app/components/question/question.html',
	controller: QuestionController,
	bindings: 
	{
		questions: '<',
		//onNextQuestion: '&'
	},
});

function QuestionController( $timeout, $state, GameDataService, TimerService )
{
	var controller = this;
	
	controller.currentQuestion = 0;
	controller.isFeedbackMode = false;
	controller.currentFeedback;
	controller.feedbackDuration = 3000; //time until the next quesition is show

	controller.$onInit = function()
	{
		TimerService.subscribeToTimeUp( controller );
	}

	controller.$onDestroy = function()
	{
		TimerService.unsubscribeToTimeUp( controller );
	}

	controller.nextQuestion = function()
	{
		console.log("sup next question");

		if( controller.currentQuestion >= controller.questions.length - 1 )
		{
			//controller.currentQuestion = 0;
			$state.go( 'results' );
		}
		else
		{
			controller.currentQuestion++;
			TimerService.restart();
		}

		controller.isFeedbackMode = false;
	}

	controller.prevQuestion = function()
	{
		if( controller.currentQuestion <= 0 )
		{
			controller.currentQuestion = controller.questions.length - 1;
		}
		else
		{
			controller.currentQuestion--;
		}

		controller.isFeedbackMode = false;
	}

	//TODO explore alternate methods of displaying the feedback (dont love passing as param)
	controller.evaluateAnswer = function( tIsCorrect, tFeedback )
	{
		if( tIsCorrect )
		{
			//answer is correct
			console.log( "CORRECT!" );
			GameDataService.incrementWins();
		}
		else
		{
			console.log( "INCORRECT!" );
			GameDataService.incrementLosses();
			//answer is incorrect - you lose
		}

		controller.currentFeedback = tFeedback;
		controller.isFeedbackMode = true;
		TimerService.pause();

		//call next question after time has passed
		$timeout( controller.nextQuestion, controller.feedbackDuration );
	}

	controller.onTimeUp = function()
	{
		controller.currentFeedback = "YOU'RE OUT OF TIME!";
		controller.isFeedbackMode = true;
		GameDataService.incrementLosses();

		//call next question after time has passed
		$timeout( controller.nextQuestion, controller.feedbackDuration );
	}
}