StatsKeeper.Player = DS.Model.extend({
    playerName: DS.attr(),
    team: DS.belongsTo("team", {async: true}),
    stat: DS.hasMany('stat', {async: true}),
    shootingPercentage: function() {

      var stats = this.get('stat');

    if (stats.filterBy("attempt") !== undefined) {

      var attempt = stats.filterBy("attempt");
      var made =  stats.filterBy('made');

      if (attempt.length === 0) {
        return 0
      } else {
      var percentage = made.length / attempt.length;

      return (percentage * 100).toFixed(2) + "%";

      }

    } else{
      console.log("you suck");
    }

    }.property("stat")
});
