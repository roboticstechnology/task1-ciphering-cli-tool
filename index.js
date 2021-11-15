const log = console.log;

class CustomExceptionValidate extends Error {

    constructor(message, name = 'exception in validate ClI options') {
        super(message);
        this.name = name;
        log(this.constructor.name);
    }
}

try {

    log(process.argv)
    const CLIoptions = {};
    process.argv.forEach((element, ind) => {

        if (element === '-c' || element === '--config') {

            if (CLIoptions.hasOwnProperty('-c')) throw new CustomExceptionValidate('duplicated option -c', 'ValidateDublicatedOptionsError');
            CLIoptions['-c'] = process.argv[ind + 1];

        }

        if (element === '-i' || element === '--input') {

            if (CLIoptions.hasOwnProperty('-i')) throw new CustomExceptionValidate('duplicated option -i', 'ValidateDublicatedOptionsError');
            CLIoptions['-i'] = process.argv[ind + 1];

        }

        if (element === '-o' || element === '--output') {

            if (CLIoptions.hasOwnProperty('-o')) throw new CustomExceptionValidate('duplicated option -o', 'ValidateDublicatedOptionsError');
            CLIoptions['-o'] = process.argv[ind + 1];
        }

    });

    log(' CLIoptions = ', CLIoptions);
} catch (e) {
    log(e);
    if (e instanceof CustomExceptionValidate) {
        process.stderr.write(`${e.name}: ${e.message}`);
        process.exit(666);
    }

}

