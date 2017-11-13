'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const commandExists = require('command-exists').sync;
const camelize = require('camelize')
const decamelize = require('decamelize');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', {
            type: String,
            required: false,
            desc: '[Project library name]'
        });

        this.option('disableConsole', {
            desc: 'Disable yosay console (default: false)'
        });

        this.console = !this.options.disableConsole;
        this.appname = this.options.appname || this.appname;
    }

    initializing() {
        this.pkg = require('../../package.json');
    }

    prompting() {
        var text = 'Welcome to the ' + chalk.red('Angular-JS') + ' generator!';
        this.log(this.console ? yosay(text) : text);

        const prompts = [{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.config.get('name') || this.appname
        }, {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: this.config.get('description')
        }, {
            type: 'input',
            name: 'author',
            message: 'Author',
            default: this.config.get('author')
        }, {
            type: 'input',
            name: 'email',
            message: 'Email',
            default: this.config.get('email')
        }, {
            type: 'input',
            name: 'license',
            message: 'License',
            default: this.config.get('license') || 'GPL-3.0'
        }, {
            type: 'input',
            name: 'username',
            message: 'What\'s your GitHub username',
            default: this.config.get('username')
        }];

        return this.prompt(prompts).then(props => {

            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
            this.email = props.email;
            this.license = props.license;
            this.username = props.username;

            this.projectModule = camelize(this.name) + "Module";
            this.projectLib = decamelize(camelize(this.name)).replace("_", "-");

            this.config.set('name', this.name);
            this.config.set('projectModule', this.projectModule);
            this.config.set('version', '0.0.0');
            this.config.set('description', this.description);
            this.config.set('author', this.author);
            this.config.set('email', this.email);
            this.config.set('license', this.license);
            this.config.set('username', this.username);
            this.config.set('includeBootstrap', this.includeBootstrap);
            this.config.set('includeSass', this.includeSass);

        });
    }

    writing() {
        this._writingReadme();
        this._writeGulpfile();
        this._writingPackageJSON();
        this._writingGitIgnore();
        this._writingKarmaConfig();
        this._writingTravisConfig();
    }

    _writingReadme() {
        this.fs.copyTpl(
            this.templatePath('_README.md'),
            this.destinationPath('README.md'), {
                name: this.name,
                description: this.description,
                author: this.author,
                license: this.license,
                username: this.username
            }
        );
    }

    _writeGulpfile() {
        this.fs.copyTpl(
            this.templatePath('_gulpfile.js'),
            this.destinationPath('gulpfile.js'), {
                date: (new Date).toISOString().split('T')[0],
                name: this.pkg.name,
                version: this.pkg.version,
                projectLib: this.projectLib,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingPackageJSON() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.name,
                version: this.version,
                description: this.description,
                author: this.author,
                email: this.email,
                license: this.license,
                includeSass: this.includeSass,
                includeBootstrap: this.includeBootstrap
            }
        );
    }

    _writingGitIgnore() {
        this.fs.copy(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore')
        );
    }

    _writingKarmaConfig() {
        this.fs.copy(
            this.templatePath('_karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
    }

    _writingTravisConfig() {
        this.fs.copy(
            this.templatePath('_travis.yml'),
            this.destinationPath('.travis.yml')
        );
    }

    install() {
        const hasYarn = commandExists('yarn');

        this.installDependencies({
            npm: !hasYarn,
            bower: false,
            yarn: hasYarn
        });

        var text = 'Run ' + chalk.red('npm [options [build, dist, test, docs]]');
        this.log(this.console ? yosay(text) : text);

        text = 'Run ' + chalk.red('yo ajslib --help');
        this.log(this.console ? yosay(text) : text);
    }
};
