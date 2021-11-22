import { run } from '../app.js';

const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { });



describe('Testing validate arguments', () => {
    describe('validate arguments', () => {
        test('duplicate -c', async () => {
            try {
                process.argv = ['node', 'myapp ', '-c', 'C1-C1-A-R0', '-c', 'C0'];
                await run();
            } catch (error) {
                expect(error.message).toMatch('duplicated option -c');
                expect(mockExit).toHaveBeenCalledWith(1);
            }

        });
        test('duplicate -i', async () => {
            try {
                process.argv = ['node', 'myapp ', '-i', '-i'];
                await run();
            } catch (error) {
                expect(error.message).toMatch('duplicated option -i');
                expect(mockExit).toHaveBeenCalledWith(1);
            }

        });

        test('duplicate -0', async () => {
            try {
                process.argv = ['node', 'myapp ', '-o', '-o'];
                await run();
            } catch (error) {
                expect(error.message).toMatch('duplicated option -o');
                expect(mockExit).toHaveBeenCalledWith(1);
            }

        });
        test('dont accses file by url -0', async () => {
            try {
                process.argv = ['node', 'myapp ', '-o', './input111.txt'];
                await run();
            } catch (error) {
                expect(error.message).toMatch('file is not found or invalid path');
                expect(mockExit).toHaveBeenCalledWith(1);
            }

        });


    });

});