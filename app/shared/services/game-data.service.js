angular.module( 'trivia' ).service( 'GameDataService', function()
{
  var gameData = this;

  gameData.wins = 0;
  gameData.losses = 0;

  gameData.incrementWins = function()
  {
    gameData.wins++;
  }

  gameData.incrementLosses = function()
  {
    gameData.losses++;
  }

  //return the current game data
  gameData.getGameData = function()
  {
    return { wins: gameData.wins, losses: gameData.losses };
  }

  //zero out the data, (triggered after a player restarts)
  gameData.resetGameData = function()
  {
    gameData.wins = 0;
    gameData.losses = 0;
  }
});