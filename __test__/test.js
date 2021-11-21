import { chipierAtbash } from '../chipier/chipierAtbash.js';
import { chipierCaesar } from '../chipier/chipierCaesar.js';
import { chipierROT } from '../chipier/chipierROT8.js';

const log = console.log;

describe('Test Chipiers', () => {
    //it.todo('should return writable stream')
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

    describe('test chipier Caesar', () => {
        test('test EN Caesar in upperCase & offset + 8', () => {
            expect(chipierCaesar('ABC', 8)).toEqual('IJK');
        });
        test('test RU Caesar in upperCase & offset + 8', () => {
            expect(chipierCaesar('АБВ', 8)).toEqual('АБВ');
        });
        test('test en Caesar in lowerCase & offset + 8', () => {
            expect(chipierCaesar('abc', 8)).toEqual('ijk');
        });
        test('test ru/nuber Caesar in lowerCase & offset + 8', () => {
            expect(chipierCaesar('абв123', 8)).toEqual('абв123');
        });
        test('test EN Caesar in upperCase & offset - 8', () => {
            expect(chipierCaesar('ABC', -8)).toEqual('STU');
        });
        test('test RU Caesar in upperCase & offset - 8', () => {
            expect(chipierCaesar('абв', -8)).toEqual('абв');
        });
        test('test en Caesar in lowerCase & offset - 8', () => {
            expect(chipierCaesar('abc', -8)).toEqual('stu');
        });
    });

    describe('test chipier chipierROT', () => {
        test('test EN chipierROT in upperCase & offset + 1', () => {
            expect(chipierROT('ABC', 1)).toEqual('BCD');
        });
        test('test RU chipierROT in upperCase & offset + 1', () => {
            expect(chipierROT('АБВ', 8)).toEqual('АБВ');
        });
        test('test en chipierROT in lowerCase & offset + 1', () => {
            expect(chipierROT('abc', 1)).toEqual('bcd');
        });
        test('test ru/nuber chipierROT in lowerCase & offset + 1', () => {
            expect(chipierROT('абв123', 8)).toEqual('абв123');
        });
        test('test EN chipierROT in upperCase & offset - 1', () => {
            expect(chipierROT('A', -1)).toEqual('Z');
        });
        test('test RU chipierROT in upperCase & offset - 1', () => {
            expect(chipierROT('абв', -1)).toEqual('абв');
        });
        test('test en chipierROT in lowerCase & offset - 1', () => {
            expect(chipierROT('a', -1)).toEqual('z');
        });
    });
})