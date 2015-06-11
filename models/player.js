StatsKeeper.Player = DS.Model.extend({
    playerName: DS.attr(),
    team: DS.belongsTo("team", {async: true}),
    stats: DS.hasMany('stat', {async: true}),
    shootingPercentage: function() {


    if (attempt !== undefined) {

      var stats = this.get('stat');
      var attempt = stats.filterBy("attempt");
      var made =  stats.filterBy('made');

      if (attempt.length === 0) {
        return 0
      } else {
      var percentage = made.length / attempt.length;

      return percentage;

      }

    }

    }.property("stats")
});
