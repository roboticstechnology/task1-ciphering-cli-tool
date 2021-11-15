const log = console.log;
import fs from 'fs';
import path from 'path';
import util from 'util';
const fsAccess = util.promisify(fs.access);



class CustomExceptionValidate extends Error {

    constructor(message, name = 'exception in validate ClI options') {
        super(message);
        this.name = name;
        log(this.constructor.name);
    }
}

class CustomExceptionExistsFile extends Error {

    constructor(message, path, _name = 'NoExistsFile') {
        super(message);
        this.path = path;
        this.name = _name;

    }
}

const run = async () => {
    try {

        log(process.argv)
        const CLIoptions = {};
        let ind = 0;
        for (const element of process.argv) {

            if (element === '-c' || element === '--config') {

                if (CLIoptions.hasOwnProperty('-c')) throw new CustomExceptionValidate('duplicated option -c', 'ValidateDublicatedOptionsError');
                CLIoptions['-c'] = process.argv[ind + 1];

            }

            if (element === '-i' || element === '--input') {

                if (CLIoptions.hasOwnProperty('-i')) throw new CustomExceptionValidate('duplicated option -i', 'ValidateDublicatedOptionsError');
                try {
                    await fsAccess(process.argv[ind + 1], fs.constants.R_OK);
                } catch (e) {
                    throw new CustomExceptionExistsFile(`file is not found or invalid path `, process.argv[ind + 1]);
                }
                CLIoptions['-i'] = process.argv[ind + 1];

            }

            if (element === '-o' || element === '--output') {

                if (CLIoptions.hasOwnProperty('-o')) throw new CustomExceptionValidate('duplicated option -o', 'ValidateDublicatedOptionsError');
                try {
                    await fsAccess(process.argv[ind + 1], fs.constants.W_OK);
                } catch (e) {
                    throw new CustomExceptionExistsFile(`file is not found or invalid path`, process.argv[ind + 1]);
                }
                CLIoptions['-o'] = process.argv[ind + 1];
            }

            ind += 1;

        };

        log(' CLIoptions = ', CLIoptions);
    } catch (e) {
        log(e);
        if (e instanceof CustomExceptionValidate) {
            process.stderr.write(`${e.name}: ${e.message}`);
            process.exit(666);
        }
        if (e instanceof CustomExceptionExistsFile) {
            process.stderr.write(`${e.name}: ${e.message}`);
            process.stderr.write(`${e.path}`);
            process.exit(666);
        }

    }
}

run();
