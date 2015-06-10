StatsKeeper.Stat = DS.Model.extend({
    attempt: DS.attr(),
    made: DS.attr(),
    player: DS.belongsTo('player', {async: true})

});
