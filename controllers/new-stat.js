StatsKeeper.NewStatController = Ember.ObjectController.extend({
  needs: ['player'],
  actions: {
    save: function() {
      var newStat= this.store.createRecord('stat', {
        attempt: this.get('attempt'),
        made:this.get('made')

      });

    newStat.save();

      var player = this.get("controllers.player.model");

      player.get("stat").pushObject(newStat);
      player.save();


    this.transitionToRoute('player', player.id);
    this.set('attempt', '');
    this.set('made','');
    }

  }

  // shootingPercent: function(){
  //   return 3
  // }.property()
});
