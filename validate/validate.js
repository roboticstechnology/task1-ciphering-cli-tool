import fs from 'fs';
import util from 'util';

const fsAccess = util.promisify(fs.access);
const log = console.log;

import { CustomExceptionValidate, CustomExceptionExistsFile } from '../exceptions/exceptions.js'

export const validate = async () => {
    try {

        //log(process.argv);
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

        // log(' CLIoptions = ', CLIoptions);
        return CLIoptions;

    } catch (e) {

        //  log(e);
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

export const configParamsValidate = configValue => {
    try {
        const CHIPHER_TYPES = ['C0', 'C1', 'R0', 'R1', 'A'];

        let resultParams = [];
        if (!configValue) throw new CustomExceptionValidate('config option is empty', 'ValidateConfigOptionError');
        if (configValue.length <= 2 && CHIPHER_TYPES.includes(configValue)) resultParams.push(configValue);
        if (configValue.length > 2) {
            const configParams = configValue.split('-');
            for (const el of configParams) {
                if (!CHIPHER_TYPES.includes(el)) throw new CustomExceptionValidate(`invalid format config options (${el})`, 'ValidateConfigOptionError');
            }
            resultParams = configParams;
        }
        return resultParams;
    } catch (e) {
        //log(e);
        if (e instanceof CustomExceptionValidate) {
            process.stderr.write(`${e.name}: ${e.message}`);
            process.exit(666);
        }
    }
}