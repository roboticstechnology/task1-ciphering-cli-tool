import { validate, configParamsValidate } from '../validate/validate.js';

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });


describe('Testing validate arguments', () => {
  describe('validate arguments', () => {
    test('duplicate -c', async () => {
      try {
        process.argv = ['node', 'myapp ', '-c', 'C1-C1-A-R0', '-c', 'C0'];
        await validate();
      } catch (error) {
        expect(error.message).toMatch('duplicated option -c');
        expect(mockExit).toHaveBeenCalledWith(1);
      }

    });
    test('duplicate -i', async () => {
      try {
        process.argv = ['node', 'myapp ', '-i', '-i'];
        await validate();
      } catch (error) {
        expect(error.message).toMatch('duplicated option -i');
        expect(mockExit).toHaveBeenCalledWith(1);
      }

    });

    test('duplicate -0', async () => {
      try {
        process.argv = ['node', 'myapp ', '-o', '-o'];
        await validate();
      } catch (error) {
        expect(error.message).toMatch('duplicated option -o');
        expect(mockExit).toHaveBeenCalledWith(1);
      }

    });
    test('dont accses file by url -0', async () => {
      try {
        process.argv = ['node', 'myapp ', '-o', './input111.txt'];
        await validate();
      } catch (error) {
        expect(error.message).toMatch('file is not found or invalid path');
        expect(mockExit).toHaveBeenCalledWith(1);
      }

    });

    test('correct parsing cli params', async () => {
      process.argv = ['node', 'myapp ', '-c', 'A', '-i', './input.txt', '-o', './output.txt'];
      expect(await validate()).toEqual({ "-c": "A", "-i": "./input.txt", "-o": "./output.txt" });

    });

    test('config value is empty', async () => {
      try {
        configParamsValidate([]);
      } catch (error) {
        expect(error.message).toMatch('config option is empty');
        expect(mockExit).toHaveBeenCalledWith(1);
      }

    });

    test('config value is correctly and size = 2', async () => {

      expect(configParamsValidate(['C0'])).toEqual([]);
    })

    test('config value is correctly and size >2', async () => {

      expect(configParamsValidate(['C0-A1'])).toEqual([]);
    })


  });
});