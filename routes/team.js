StatsKeeper.TeamRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('team', params.team_id);
  }
});
