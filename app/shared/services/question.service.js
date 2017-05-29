angular.module( 'trivia' ).service( 'QuestionService', function( $http )
{
  var service =
  {
    getAllQuestions: function()
    {
      return $http.get( 'assets/data/data.json', { cache: true } ).then( function( tResponse ) 
      {
        console.log( tResponse );
        return tResponse.data;
      });
    },
  }
  
  return service;
})