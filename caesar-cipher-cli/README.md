# caesar-cipher-cli

CLI Tool to encode and decode text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## Install

```
$ git clone https://github.com/irinainina/caesar-cipher-cli
$ cd caesar-cipher-cli/caesar-cipher-cli
$ npm install
```
## Usage

```
$ node app --action <encode|decode> --shift <number> [--input <input>] [--output <output>]
```
## Options

CLI tool accept 4 options:

|  alias | full name  |       description       |
| -------| ---------- | ----------------------- |
| -s     | --shift    | a shift                 |
| -i     | --input    | an input file           |
| -o     | --output   | an output file          |
| -a     | --action   | an action encode/decode |

## Usage example:	

```
$ node app --action encode --shift 5 --input input.txt --output output.txt
```
## Result example:

`input.txt` Lorem Ipsum is simply dummy text

`output.txt` Qtwjr Nuxzr nx xnruqd izrrd yjcy
