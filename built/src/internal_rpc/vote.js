module.exports = function (p) {
    me.batchAdd('vote', [p.id, p.approval, p.rationale]);
    return { confirm: 'Voted' };
};
