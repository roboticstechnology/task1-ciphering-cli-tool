import { Transform } from 'stream';

import { chipierAtbash } from '../chipier/chipierAtbash.js';
import { chipierCaesar } from '../chipier/chipierCaesar.js';
import { chipierROT } from '../chipier/chipierROT8.js';



export class CustomTransformStream extends Transform {
    constructor(chipType) {
        super();
        this.type = chipType;

    }


    _transform(chunk, _encoding, callback) {
        try {
            let result = '';
            if (this.type === 'A') result = chipierAtbash(chunk.toString('utf8'));
            if (this.type === 'C1') result = chipierCaesar(chunk.toString('utf8'), 1);
            if (this.type === 'C0') result = chipierCaesar(chunk.toString('utf8'), -1);
            if (this.type === 'R1') result = chipierROT(chunk.toString('utf8'), 8);
            if (this.type === 'R0') result = chipierROT(chunk.toString('utf8'), -8);

            callback(null, result);
        } catch (err) {
            callback(err);
        }
    }

}