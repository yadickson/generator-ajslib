'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const commandExists = require('command-exists').sync;
const camelize = require('camelize')
const decamelize = require('decamelize');
const pkg = require('package-json-utils');

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
            default: pkg.getProjectName() || this.appname
        }, {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: pkg.getDescription()
        }, {
            type: 'input',
            name: 'author',
            message: 'Author',
            default: pkg.getAuthor()
        }, {
            type: 'input',
            name: 'email',
            message: 'Email',
            default: pkg.getEmail()
        }, {
            type: 'input',
            name: 'license',
            message: 'License',
            default: pkg.getLicense()
        }, {
            type: 'input',
            name: 'username',
            message: 'What\'s your GitHub username',
            default: pkg.getUsername()
        }];

        return this.prompt(prompts).then(props => {

            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
            this.email = props.email;
            this.license = props.license;
            this.username = props.username;

            this.modulename = camelize(pkg.getProjectName() || 'app') + 'Module';
            this.projectLib = decamelize(camelize(this.name)).replace("_", "-");
        });
    }

    writing() {
        this._writingReadme();
        this._writeGulpfile();
        this._writingPackageJSON();
        this._writingGitIgnore();
        this._writingKarmaConfig();
        this._writingTravisConfig();
        this._writingMainScript();
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
                username: this.username,
                projectLib: this.projectLib,
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

    _writingMainScript() {
        this.fs.copyTpl(
            this.templatePath('src/main.js'),
            this.destinationPath('src/main.js'), {
                modulename: this.modulename
            }
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