'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajslib:constant', () => {
    describe('Create template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/constant'))
                .withArguments(['numeric'])
                .on('end', done);
        });

        it('creates src/services/numeric_const.js', () => {
            assert.file(['src/services/numeric_const.js']);
        });

        it('creates test/spec/services/numeric_const_test.js', () => {
            assert.file(['test/spec/services/numeric_const_test.js']);
        });
    });
});
