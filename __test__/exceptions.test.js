import { CustomExceptionValidate, CustomExceptionExistsFile } from '../exceptions/exceptions.js'

describe('Testing custom exceprions handlers', () => {
    describe('CustomExceptionValidate', () => {
        test('Testing duplicate config options', () => {
            expect(() => {
                throw new CustomExceptionValidate('duplicated option -c');
            }).toThrowError('duplicated option -c');
        });
    });
    describe('CustomExceptionExistsFile', () => {
        test('Testing file exists', () => {
            expect(() => {
                throw new CustomExceptionExistsFile(`file is not found or invalid path`);
            }).toThrowError(`file is not found or invalid path`);
        });
    });
});