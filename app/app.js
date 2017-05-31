var app = angular.module( 'trivia', [ 'ui.router' ] );

app.config( function( $stateProvider, $urlRouterProvider )
{
  
  $stateProvider.state( 'start', 
  {
    url: "",
    views:
    {
      "starter": { component: 'starter' },
    },
  })

  .state( 'game', 
  {
    url: "/game",
    views:
    {
      "timer": { component: 'timer' },
      "question": 
      {
        component: 'question',
        bindings: { questions: 'questionsData' },
      },
    },

    resolve: 
    { 
      questionsData: function( QuestionService ){ return QuestionService.getAllQuestions(); },
    }
  })
  .state( 'results', 
  {
    url: "/results",
    views:
    {
      "results": { component: 'results' },
    },
  })
});