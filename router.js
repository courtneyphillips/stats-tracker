StatsKeeper.Router.map(function (){
  this.resource('teamz', {path: '/'});
  this.resource('team', {path: 'teamz/:team_id'}, function(){
      this.resource("newPlayer");
  });
  this.resource('player', {path: 'player/:player_id'}, function(){
    this.resource("new-stat");
  });
});
