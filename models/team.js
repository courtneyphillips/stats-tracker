StatsKeeper.Team = DS.Model.extend({
    name: DS.attr(),
    player: DS.hasMany('player', {async: true})
});
