StatsKeeper.NewStatController = Ember.ObjectController.extend({
  needs: ['player'],
  actions: {

    made: function() {

      var newStat = this.store.createRecord('stat', {
        attempt: 1,
        made: true
      });
      newStat.save();

      var player = this.get("controllers.player.model");

      player.get("stat").pushObject(newStat);



      player.save();

    this.transitionTo('player', player.id);

  }.observes('player'),

    missed: function() {

      var newStat = this.store.createRecord('stat', {
        attempt: 1,
        made: false
      });

      newStat.save();

      var player = this.get("controllers.player.model");

      player.get("stat").pushObject(newStat);

      // this.transitionToRoute('player', player.id);

      player.save();
      return this.transitionTo('player', player.id);

    }

    // save: function() {
    //
    //   var
    //
    //   var newStat= this.store.createRecord('stat', {
    //     attempt: 1
    //     made:this.get('made')
    //
    //   });
    //
    // newStat.save();
    //
    //   var player = this.get("controllers.player.model");
    //
    //   player.get("stat").pushObject(newStat);
    //   player.save();
    //
    //
    //
    // this.set('attempt', '');
    // this.set('made','');
    // }

  }
  //trying to use a computed property function
});
