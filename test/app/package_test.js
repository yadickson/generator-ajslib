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
                    email: 'email@domain.com',
                    username: 'user'
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
            assert.fileContent('package.json', '"name": "app author"');
        });

        it('should package contain email', () => {
            assert.fileContent('package.json', '"email": "email@domain.com",');
        });

        it('should package contain url', () => {
            assert.fileContent('package.json', '"url": "https://github.com/user"');
        });

    });

    describe('Check package.json without username ', () => {
        before(done => {
            helpers.run(path.join(__dirname, '../../generators/app'))
                .withArguments(['appModule'])
                .withPrompts({
                    description: 'app description',
                    author: 'app author',
                    email: 'email@domain.com'
                })
                .on('end', done);
        });

        it('should package contain name', () => {
            assert.fileContent('package.json', '"name": "appModule"');
        });

        it('should package contain description', () => {
            assert.fileContent('package.json', '"description": "app description"');
        });

        it('should package contain author', () => {
            assert.fileContent('package.json', '"name": "app author"');
        });

        it('should package contain email', () => {
            assert.fileContent('package.json', '"email": "email@domain.com"');
        });

        it('should package no contain url', () => {
            assert.noFileContent('package.json', '"url": "https://github.com/user"');
        });

    });
});