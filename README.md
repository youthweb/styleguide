# Youthweb Styleguide

The Youthweb Styleguide is build with Pattern Lab and is based on the Standard Edition for Twig.

## Requirements

Required are:

- PHP >= 5.4
- npm 5

## Installing

Youthweb Styleguide uses [Composer](https://getcomposer.org/) and [npm](https://npmjs.org) to manage project dependencies.

### 1. Install Composer

We recommend you [install Composer locally](https://getcomposer.org/doc/00-intro.md#locally). If you have Composer installed globally you have to replace `php composer.phar` with `composer` in the following commands

### 2. Install the dependencies

In Terminal type:

    php composer.phar update
    npm install

This will install all dependencies.

## Updating the Patterns

Make your changes in the `/source` folder.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    npm run build

### Watch for changes and re-generate Pattern Lab

To watch for changes and re-generate the front-end for Pattern Lab type:

    npm run watch

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a seperate window type:

    npm run server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Update GitHub Pages

To update the GitHub Pages on https://youthweb.github.io/styleguide/latest do this in the terminal on the master branch:

    npm run build
    rm -r docs/latest
    cp -r public/ docs/latest
    git commit -am 'Update latest version'
    git push origin master

The changes should be online within seconds.

### Releasing a new version

To release a new version you should first update the GitHub Pages on https://youthweb.github.io/styleguide/current with this commands on the master branch:

    npm run publish
    rm -r docs/current
    cp -r public/ docs/current
    git commit -am 'Release {version}'
    git push origin master

Then you can tag this commit as a new release (e.g. as `1.0.0`) and push it to the GitHub repository:

    git tag {version}
    git push origin --tags
