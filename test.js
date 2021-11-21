import { chipierAtbash } from './chipier/chipierAtbash.js';

const log = console.log;

describe('Test Chipiers', () => {

    describe('test chipier Atbash', () => {
        test('test EN charS in upperCase', () => {
            expect(chipierAtbash('ABC')).toEqual('ZYX');
        });
        test('test RU charS in upperCase', () => {
            expect(chipierAtbash('АБВ')).toEqual('АБВ');
        });
        test('test en charS in lowerCase', () => {
            expect(chipierAtbash('abc')).toEqual('zyx');
        });
        test('test ru/nuber charS in lowerCase', () => {
            expect(chipierAtbash('абв123')).toEqual('абв123');
        });
    });
})