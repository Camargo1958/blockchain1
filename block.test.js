const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;
    beforeEach(() => {
        data = 'index.html';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    });

    it('set `data` to match input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets `lastHash` to match hash of last Blocl', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    });

});