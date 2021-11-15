import fs from 'fs';
import path from 'path';
import util from 'util';
const fsAccess = util.promisify(fs.access);

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

f()