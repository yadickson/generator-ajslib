# generator-ajslib
> Yeoman Gulp Generator for AngularJS Library

[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![npm version][npm-image]][npm-url]

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ajslib using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

Simply run a global install using your terminal and you're good to go!

```bash
npm install -g yo generator-ajslib
```

## List generators

```bash
yo --generators
```

## Make project

Help

```bash
yo ajslib --help
```

Then generate your new project:

```bash
yo ajslib
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## Usage

Make a new directory, and `cd` into it:

```
mkdir project && cd project
```

Run `yo ajslib`, optionally passing an app name:
```
yo ajslib [project-name]
```
## Build develop mode

Make build directory with full application

```
gulp build
```

## Dist production mode

Make dist directory with minimal application for production

```
gulp dist
```

## Test

> Console

```
gulp test
```

> Coverage

```
Check coverage directory
```

## Clean

```
gulp clean
```

## Docs

```
gulp docs
```

## Generators

Available generators:

* [ajslib](#app) (aka [ajslib:app](#app))
* [ajslib:directive](#directive)
* [ajslib:filter](#filter)
* [ajslib:service](#service)
* [ajslib:provider](#provider)
* [ajslib:factory](#factory)
* [ajslib:value](#value)
* [ajslib:constant](#constant)
* [ajslib:decorator](#decorator)
* [ajslib:component](#component)


### App
Sets up a new AngularJS library

Example:
```bash
yo ajslib --help
yo ajslib project
```

### Directive
Generates a directive in `src/directives`.

Example:
```bash
yo ajslib:directive --help
yo ajslib:directive directive-name
```

### Filter
Generates a filter in `src/filters`.

Example:
```bash
yo ajslib:filter --help
yo ajslib:filter filter-name
```

### Service
Generates an AngularJS service in `src/services`.

Example:
```bash
yo ajslib:service --help
yo ajslib:service service-name
```

### Provider
Generates an AngularJS provider in `src/services`.

Example:
```bash
yo ajslib:provider --help
yo ajslib:provider provider-name
```

### Factory
Generates an AngularJS factory in `src/services`.

Example:
```bash
yo ajslib:factory --help
yo ajslib:factory factory-name
```

### Value
Generates an AngularJS value in `src/services`.

Example:
```bash
yo ajslib:value --help
yo ajslib:value value-name
```

### Constant
Generates an AngularJS constant in `src/services`.

Example:
```bash
yo ajslib:constant --help
yo ajslib:constant constant-name
```

### Decorator
Generates an AngularJS service decorator in `src/decorators`.

Example:
```bash
yo ajslib:decorator --help
yo ajslib:decorator service-name
```

### Component
Generates an AngularJS component in `src/components`.

Example:
```bash
yo ajslib:component --help
yo ajslib:component component-name
```

## License

GPL-3.0 © [Yadickson Soto](https://github.com/yadickson)


[travis-image]: https://travis-ci.org/yadickson/generator-ajslib.svg
[travis-url]: https://travis-ci.org/yadickson/generator-ajslib

[coveralls-image]: https://coveralls.io/repos/github/yadickson/generator-ajslib/badge.svg
[coveralls-url]: https://coveralls.io/github/yadickson/generator-ajslib

[dependencies-image]: https://david-dm.org/yadickson/generator-ajslib/status.svg
[dependencies-url]: https://david-dm.org/yadickson/generator-ajslib?view=list

[dev-dependencies-image]: https://david-dm.org/yadickson/generator-ajslib/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/yadickson/generator-ajslib?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/generator-ajslib/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/generator-ajslib

[npm-image]: https://badge.fury.io/js/generator-ajslib.svg
[npm-url]: https://badge.fury.io/js/generator-ajslib
