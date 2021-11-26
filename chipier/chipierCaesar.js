const log = console.log;

export const chipierCaesar = (data, offset) => {

    const ALPHABET_UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ALPHABET_LOWERCASE = ALPHABET_UPPERCASE.toLowerCase();
    const ALPHABET_SIZE = ALPHABET_UPPERCASE.length;
    // log(ALPHABET_LOWERCASE, ALPHABET_SIZE);

    let result = '';

    for (const char of data) {
        // проверка символа на пренадлежность к лотинице и регистру
        if (char === char.toUpperCase()) {

            const charIndex = ALPHABET_UPPERCASE.indexOf(char);

            if (charIndex > -1) {

                let elemNumber = (charIndex + offset) % ALPHABET_SIZE;

                if (elemNumber < 0) {
                    elemNumber = ALPHABET_SIZE + elemNumber;
                     log(elemNumber);
                }

                result += ALPHABET_UPPERCASE[elemNumber];

            } else {
                result += char;
            }
        } else {

            const charIndex = ALPHABET_LOWERCASE.indexOf(char);

            if (charIndex > -1) {

                let elemNumber = (charIndex + offset) % ALPHABET_SIZE;

                if (elemNumber < 0) {
                    elemNumber = ALPHABET_SIZE + elemNumber;
                    // log(elemNumber);
                }

                result += ALPHABET_LOWERCASE[elemNumber];

            } else {
                result += char;
            }

        }



    }

    return result;
}