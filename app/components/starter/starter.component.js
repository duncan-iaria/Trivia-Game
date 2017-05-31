angular.module( 'trivia' ).component( 'starter', 
{
	templateUrl: 'app/components/starter/starter.html',
	controller: StarterController,
});

function StarterController( $state )
{
	var controller = this;

	controller.startGame = function()
	{
		$state.go( 'game' );
	}
}