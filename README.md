# Youthweb Styleguide

The Youthweb Styleguide is build with Pattern Lab and is based on the Standard Edition for Twig.

## Installing

Youthweb Styleguide uses [Composer](https://getcomposer.org/) to manage project dependencies.

### 1. Install Composer

Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

### 2. Install the dependencies

In Terminal type:

    composer update
    npm install

This will install all dependencies.

## Updating the Patterns

Make your changes in the `/source` folder.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    npm run publish

### Watch for changes and re-generate Pattern Lab

To watch for changes and re-generate the front-end for Pattern Lab type:

    npm run watch

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a seperate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Update GitHub Pages

To update the GitHub Pages on https://youthweb.github.io/styleguide do this in the terminal:

    npm run publish
    git checkout gh-pages
    cp -R ./public/* ./
    git commit -am 'Update gh-pages'
    git push origin gh-pages

The changes should be online within seconds.
