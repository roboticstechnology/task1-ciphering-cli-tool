const log = console.log;

export const chipierAtbash = data => {

    const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ALPHABET_LOWERCASE = ALPHABET_UPPERCASE.toLowerCase();
    const ALPHABET_SIZE = ALPHABET_UPPERCASE.length;

    let result = '';

    for (const char of data) {
        // проверка символа на пренадлежность к лотинице и регистру
        if (char === char.toUpperCase()) {
            //  log(`char is BIG`);

            const charIndex = ALPHABET_UPPERCASE.indexOf(char);
            //log(charIndex);
            if (charIndex > -1) {
                const elemNumber = ALPHABET_SIZE - (charIndex + 1);
                result += ALPHABET_UPPERCASE[elemNumber];

            } else {
                result += char;
            }

        } else {

            const charIndex = ALPHABET_LOWERCASE.indexOf(char);

            if (charIndex > -1) {
                const elemNumber = ALPHABET_SIZE - (charIndex + 1);
                result += ALPHABET_LOWERCASE[elemNumber];

            } else {
                result += char;
            }

        }

    }

    return result;
}