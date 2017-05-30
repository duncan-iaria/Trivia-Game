angular.module( 'trivia' ).component( 'results', 
{
	templateUrl: 'app/components/results/results.html',
	controller: ResultsController,
});

function ResultsController( $state )
{
	var controller = this;

	controller.correct = 5;
	controller.incorrect = 7;

	controller.restart = function()
	{	
		console.log( "eh" );
		//reset tracking vars
		controller.correct = 0;
		controller.incorrect = 0;

		//set view back to questions
		$state.go( 'question' );
	}

	controller.test = function()
	{
		console.log( 'wtf' );
	}
}
