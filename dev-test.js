const Block = require('./block');
//const block1 = new Block('foo', 'bar', 'zoo', 'baz');
const block2 = new Block('7657', '753849EFEFDE3', '65647383EFDCDCAE', '100');

//console.log(block1.toString())
console.log(block2.toString())

const primeiroBloco = Block.genesis();
console.log(primeiroBloco.toString());
const segundoBloco = Block.mineBlock(primeiroBloco, '$5500');
console.log(segundoBloco.toString());