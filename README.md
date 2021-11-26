# RSS2021-NodeJS-Task01

RSS2021-NodeJS Task 1. Ciphering CLI tool

---

CLI tool that will encode and decode a text by 3 substitution ciphers :

- Caesar cipher
- Atbash cipher
- ROT-8 as variation of ROT-13

## How to install

1. Download or clone this repository
   > git clone https://github.com/roboticstechnology/task1-ciphering-cli-tool.git
   ###### in branch 'task-1-ciphering-cli-tool'
   > git checkout task-1-ciphering-cli-tool
2. Go to the app folder
   > cd task-1-ciphering-cli-tool
3. Install dependencies
   > npm install

## How to use

Open command line in your computer, transfer to this project directory and run
command

> node ciphering-tool --config <string> --input <filename> --output <filename>

CLI tool 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers Config is a string with pattern
    `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8
  cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by
Caesar cipher => decode by ROT-8 => use Atbash"

You can encode and decode right in STDIN and get STDOUT by passing only
**--config**

<!-- todo -->

## Examples of usage

```bash
$ node index.js -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
```

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`

```bash
$ node index.js -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`

```bash
$ node index.js -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`

```bash
$ node index.js -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt `This is secret. Message about "_" symbol!`

> output.txt `This is secret. Message about "_" symbol!`
