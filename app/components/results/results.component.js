angular.module( 'trivia' ).component( 'results', 
{
	templateUrl: 'app/components/results/results.html',
	controller: ResultsController,
});

function ResultsController( $state, GameDataService )
{
	var controller = this;

	controller.correct = 0;
	controller.incorrect = 0;

	controller.restart = function()
	{
		//reset tracking vars
		controller.correct = 0;
		controller.incorrect = 0;

		//reset service
		GameDataService.resetGameData();

		//set view back to questions
		$state.go( 'game' );
	}

	controller.getData = function()
	{
		return  GameDataService.getGameData();
	}

	//on start get the appropriate data
	controller.$onInit = function()
	{
		controller.correct = controller.getData().wins;
		controller.incorrect = controller.getData().losses;
	}
}
