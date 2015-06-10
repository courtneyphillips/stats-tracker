StatsKeeper.Player = DS.Model.extend({
    playerName: DS.attr(),
    team: DS.belongsTo("team", {async: true}),
    stat: DS.hasMany('stat', {async: true})
});
