var app = angular.module( 'trivia', [ 'ui.router' ] );

app.config( function( $stateProvider, $urlRouterProvider )
{
  var mainState =
  {
    name: 'main',
    url: '/main',
    component: 'main',
  }

  var timerState = 
  {
    name: 'timer',
    url: '/timer',
    component: 'timer',
  }

  var questionState = 
  {
    name: 'question',
    url: '/question',
    component: 'question',
    resolve: { 
                questions: function( QuestionService ){ return QuestionService.getAllQuestions(); },
                //TODO remove this or make it work
                //answers: function( QuestionService ){ return QuestionService.getAllAnswers(); } 
              }
  }

  var resultsState =
  {
    name: 'results',
    url: '/results',
    component: 'results',
  } 

  $stateProvider.state( mainState );
  $stateProvider.state( timerState );
  $stateProvider.state( questionState );
  $stateProvider.state( resultsState );
});