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

function QuestionController( $timeout, $state )
{
	var controller = this;
	
	controller.currentQuestion = 0;
	controller.isFeedbackMode = false;
	controller.currentFeedback;
	controller.feedbackDuration = 3000; //time until the next quesition is show

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
		}
		else
		{
			console.log( "INCORRECT!" );
			//answer is incorrect - you lose
		}

		controller.currentFeedback = tFeedback;
		controller.isFeedbackMode = true;

		//$state.go( 'timer' );

		$timeout( controller.nextQuestion, controller.feedbackDuration );
	}
}