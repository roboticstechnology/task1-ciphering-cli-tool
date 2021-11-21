
class CustomExceptionValidate extends Error {

    constructor(message, name = 'exception in validate ClI options') {
        super(message);
        this.name = name;
    }
}

class CustomExceptionExistsFile extends Error {

    constructor(message, path, _name = 'NoExistsFile') {
        super(message);
        this.path = path;
        this.name = _name;

    }
}

export {
    CustomExceptionValidate,
    CustomExceptionExistsFile
}