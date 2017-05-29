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

    getAllAnswers: function()
    {
      return $http.get( 'assets/data/data.json', { cache: true } ).then( function( tResponse )
      {
        var tempAnswers = [];
        for( var i = 0; i < tResponse.data.length; i++ )
        {
          console.log( i );
          for( var j = 0; j < tResponse.data[i].answers.length; j++ )
          {
            console.log( tResponse.data[i].answers[j].text );
            tempAnswers.push( tResponse.data[i].answers[j].text );
          }
        }

        console.log( tempAnswers );
        return tempAnswers;
        //for( var i = tResponse.length)
        //return tResponse.data[0].answers
      });
    },
  }
  
  return service;
})