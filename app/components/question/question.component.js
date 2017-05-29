function QuestionController()
{
	var controller = this;
	
	controller.currentQuestion = 0;

	controller.nextQuestion = function()
	{
		console.log("sup next question");

		if( controller.currentQuestion >= controller.questions.length - 1 )
		{
			controller.currentQuestion = 0;
		}
		else
		{
			controller.currentQuestion++;
		}
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
	}
}


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