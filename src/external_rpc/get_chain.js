// extracts chain starting at their_block
module.exports = async (json, ws) => {
  let block_records = await Block.findAll({
    attributes: ['precommits', 'header', 'ordered_tx_body'],
    where: {
      id: {[Op.gt]: parseInt(json.their_block)}
    },
    order: [['id', 'ASC']],
    limit: parseInt(json.limit)
  })

  let chain = block_records.map((b, index) => {
    // include precommits in the last one, not in each
    return [
      json.include_precommits || index == block_records.length - 1
        ? r(b.precommits)
        : null,
      b.header,
      b.ordered_tx_body
    ]
  })

  return r(chain)
}
