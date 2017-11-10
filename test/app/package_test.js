'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ajslib:app', () => {
    describe('Check package.json info', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withArguments(['app'])
                .withPrompts({
                    description: 'app description',
                    author: 'app author',
                    email: 'email@domain.com'
                })
                .on('end', done);
        });

        it('should package contain name', () => {
            assert.fileContent('package.json', '"name": "app"');
        });

        it('should package contain description', () => {
            assert.fileContent('package.json', '"description": "app description"');
        });

        it('should package contain author', () => {
            assert.fileContent('package.json', '"author": "app author <email@domain.com>"');
        });
    });

});
