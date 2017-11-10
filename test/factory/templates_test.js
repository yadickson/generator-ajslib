'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajslib:factory', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/factory'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates src/services/numeric_factory.js', () => {
            assert.file(['src/services/numeric_factory.js']);
        });

        it('creates test/spec/services/numeric_factory_test.js', () => {
            assert.file(['test/spec/services/numeric_factory_test.js']);
        });
    });
});