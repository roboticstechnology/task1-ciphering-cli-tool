import { chipierAtbash } from './chipier/chipierAtbash.js';

const log = console.log;

describe('Test Chipiers', () => {
    log('Test Chipiers');

    describe('test chipier Atbash', () => {
        log('test chipier Atbash');
        test('test char upperCase', () => {
            log('test char upperCase');
            expect(chipierAtbash('ABC')).toEqual('ZYX');
        });
    });
})