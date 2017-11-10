'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajslib:decorator', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/decorator'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates src/decorators/numeric_decorator.js', () => {
            assert.file(['src/decorators/numeric_decorator.js']);
        });

        it('creates test/spec/decorators/numeric_decorator_test.js', () => {
            assert.file(['test/spec/decorators/numeric_decorator_test.js']);
        });
    });
});