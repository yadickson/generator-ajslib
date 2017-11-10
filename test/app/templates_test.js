'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajslib:app', () => {
    describe('Create root template files', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withPrompts({})
                .on('end', done);
        });

        it('creates gulpfile.js', () => {
            assert.file(['gulpfile.js']);
        });

        it('creates package.json', () => {
            assert.file(['package.json']);
        });

        it('creates README.md', () => {
            assert.file(['README.md']);
        });

        it('creates karma.conf.js', () => {
            assert.file(['karma.conf.js']);
        });

        it('creates .gitignore', () => {
            assert.file(['.gitignore']);
        });

        it('creates .travis.yml', () => {
            assert.file(['.travis.yml']);
        });
    });
});
