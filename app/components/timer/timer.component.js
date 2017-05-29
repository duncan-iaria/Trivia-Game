function QuestionController()
{
	var controller = this;

	controller.isEnabled = true;
	controller.timeLimit = 25;

	//controller.


}

angular.module( 'trivia' ).component( 'timer', 
{
	templateUrl: 'app/components/timer/timer.html',
	controller: TimerController,
});