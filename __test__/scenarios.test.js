const { exec } = require('child_process');


jest.setTimeout(30000);

describe('Testinc scenarios', () => {
    describe('Error scenarios', () => {
        test('User passes the same cli argument twice', done => {
            exec(
                `node ./index.js -c C1-C1-A-R0 -c C0`,
                (error, stdout, stderr) => {
                    expect(stderr).toEqual('ValidateDublicatedOptionsError: duplicated option -c');
                    done();
                }
            );
        });
        test('User doesnt pass - c or--config argument', (done) => {
            exec(`node ./index.js -o`, (error, stdout, stderr) => {
                expect(stderr).toEqual('NoExistsFile: file is not found or invalid pathundefined');
                done();
            });
        });
        test('User passes -i argument with path that doesnt exist or with no read access', done => {
            exec(
                `node ./index.js -c C1-C1-A-R0 -i "./input123.txt"`,
                (error, stdout, stderr) => {
                    expect(stderr).toEqual('NoExistsFile: file is not found or invalid path ./input123.txt');
                    done();
                }
            );
        });
        test('User passes -o argument with path to directory that doesnt exist or with no read access', done => {
            exec(
                `node ./index.js -c C1-C1-A-R0 -o "./output123.txt"`,
                (error, stdout, stderr) => {
                    expect(stderr).toEqual('NoExistsFile: file is not found or invalid path./output123.txt');
                    done();
                }
            );
        });

    });

    describe('Success scenarios', () => {

        test('User passes correct sequence of symbols as argument for --config that matches regular expression 1', done => {
            exec(
                `node ./index.js -c "C1-C1-R0-A" -i "./input.txt"`,
                (error, stdout, stderr) => {
                    expect(stdout).toEqual('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!');
                    done();
                }
            );
        });

        test('User passes correct sequence of symbols as argument for --config that matches regular expression 2', done => {
            exec(
                `node ./index.js  -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt"`,
                (error, stdout, stderr) => {
                    expect(stdout).toEqual('This is secret. Message about "_" symbol!');
                    done();
                }
            );
        });
    });
});