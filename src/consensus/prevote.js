module.exports = () => {
  me.status = 'prevote'

  // gossip your prevotes for block or nil
  const prevotable = me.proposed_block ? me.proposed_block.header : 0

  setTimeout(() => {
    me.sendAllValidators({
      method: 'prevote',
      proof: me.block_envelope(methodMap('prevote'), prevotable)
    })
  }, K.gossip_delay)
}
