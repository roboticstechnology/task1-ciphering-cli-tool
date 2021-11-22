import { pipeline } from 'stream';
import { CustomWriteablemStream } from './streams/writeableStream.js';
import { CustomReadablemStream } from './streams/readableStream.js';
import { CustomTransformStream } from './streams/transformStream.js';
import { validate, configParamsValidate } from './validate/validate.js';

const log = console.log;
//'E:\\_NONDE\\RR_NODE_2021Q4\\task1-ciphering-cli-tool/input.txt1'
export const run = async () => {
    try {
        const CLIParams = await validate();
        // log(CLIParams);
        const configParams = configParamsValidate(CLIParams['-c']);
        // log(configParams);
        let transformStreamArr = configParams.map(el => new CustomTransformStream(el));

        const inputStream = CLIParams['-i'] ? new CustomReadablemStream('./input.txt') : process.stdin;
        const outputStream = CLIParams['-o'] ? new CustomWriteablemStream('./output.txt') : process.stdout;

        // log(transformStreamArr)

        pipeline(
            inputStream,
            ...transformStreamArr,
            outputStream,
            err => {
                if (err) {
                    console.error('Pipeline failed', err);
                } else {
                    log('Succeeded');
                }
            }
        )
    } catch (e) {
        log(e.message);
    }
}


