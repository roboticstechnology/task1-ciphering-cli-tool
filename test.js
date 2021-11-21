import { chipierAtbash } from './chipier/chipierAtbash.js';

const log = console.log;

describe('Test Chipiers', () => {
    log('Test Chipiers');

    describe('test chipier Atbash', () => {
        log('test chipier Atbash');
        test('test EN charS in upperCase', () => {
            log('test EN chars in upperCase');
            expect(chipierAtbash('ABC')).toEqual('ZYX');
        });
        test('test RU charS in upperCase', () => {
            log('test RU chars in upperCase');
            expect(chipierAtbash('АБВ')).toEqual('АБВ');
        });
    });
})