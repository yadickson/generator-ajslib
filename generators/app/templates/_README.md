# <%= name %>
> <%= description %>

<% if (username) { %>
[![TravisCI Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependencies][dependencies-image]][dependencies-url]
[![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
<% } %>

This library use AngularJS and Html5

## Prebuild library

```bash
yarn install
```

## Test library

```bash
gulp test
```

## Build library

```bash
gulp build
```

## Dist library

```bash
gulp dist
```

## Clean project

```bash
gulp clean
```

## Thanks

 * Build application with [AngularJS Library](https://github.com/yadickson/generator-ajslib#readme).

<% if (license) { %>
## License

<%= license %><% if (username) { %> © [<%= author %>](https://github.com/<%= username %>)<% } %>
<% } %>
<% if (username) { %>
[travis-image]: https://travis-ci.org/<%= username %>/<%= name %>.svg
[travis-url]: https://travis-ci.org/<%= username %>/<%= name %>

[coveralls-image]: https://coveralls.io/repos/github/<%= username %>/<%= name %>/badge.svg
[coveralls-url]: https://coveralls.io/github/<%= username %>/<%= name %>

[dependencies-image]: https://david-dm.org/<%= username %>/<%= name %>/status.svg
[dependencies-url]: https://david-dm.org/<%= username %>/<%= name %>?view=list

[dev-dependencies-image]: https://david-dm.org/<%= username %>/<%= name %>/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/<%= username %>/<%= name %>?type=dev&view=list

[vulnerabilities-image]: https://snyk.io/package/npm/<%= name %>/badge.svg
[vulnerabilities-url]: https://snyk.io/package/npm/<%= name %>
<% } %>
