StatsKeeper.TeamzController = Ember.ArrayController.extend({

  actions: {
    save: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name')
      });

    newTeam.save();
    this.transitionToRoute('teamz');
    this.set('name', '');
    }
  }

});
