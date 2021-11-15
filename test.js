import fs from 'fs';
import path from 'path';
import util from 'util';
const fsAccess = util.promisify(fs.access);
const log = console.log;

async function f() {
    try {

        let r = await fsAccess('./input.txt', fs.constants.R_OK);
        console.log(r)
    } catch (e) {
        console.log(e)
    }
}
// console.log(fs.existsSync('E:\_NONDE\_PERN_SHOP\server\.env'))
// console.log(path.resolve('E:\_NONDE\_PERN_SHOP\server\.env'))
// fs.access('E:/_NONDE/_PERN_SHOP/server/.env1', fs.constants.W_OK, err => {
//     console.log(err);
// });

//f()
let str = 'A-A-A-R1-R0-R0-R0-C1-C1-A';
//let str = 'Bas';



const configParamsValidate = configValue => {
    const CHIPHER_TYPES = ['C0', 'C1', 'R0', 'R1', 'A'];

    let resultParams = [];
    if (!configValue.length) log('error condig if empty')
    if (configValue.length <= 2 && CHIPHER_TYPES.includes(configValue)) resultParams.push(configValue);
    if (configValue.length > 2) {
        const configParams = configValue.split('-');
        for (const el of configParams) {
            if (!CHIPHER_TYPES.includes(el)) log('trhow except config params  invalidate');
        }
        resultParams = configParams;
    }
    return resultParams;
}

log(configParamsValidate(str));