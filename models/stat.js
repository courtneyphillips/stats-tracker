StatsKeeper.Stat = DS.Model.extend({
    attempt: DS.attr(),
    made: DS.attr('boolean'),
    miss: DS.attr('boolean'),
    player: DS.belongsTo('player', {async: true})

});
