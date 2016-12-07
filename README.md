# Fastspot Boilerplate

For kickstarting internal and client project builds. Inspired by [HTML5Boilerplate](http://html5boilerplate.com/).

## First Installation

To get started working with the Fastspot Boilerplate, make sure you have [node.js](https://nodejs.org/en/) installed on your computer. That'll help us download all our task runner dependencies we need to get the boilerplate up and running.

### Installing Bower

If you haven't used `bower` before, we'll also need that to download our front end dependencies. Head over your terminal and enter the following:

```sh
npm install bower
```

### Kickstarting Development

Now that we have node's package manager and bower's package manager setup, we can start the main bulk of the installation. Using your terminal, enter the following:

```sh
bower install
```

This will download all of our front end dependencies that will be needed for our task runner, grunt. You're almost there! Enter in the following to download all the necessary task runner dependencies:

```sh
npm install
```

### Running Grunt

There's one last step before we run our grunt command and that's to download the grunt command line interface:

**OSX**

```sh
sudo npm install grunt-cli -g
```

**Windows**

```sh
npm install grunt-cli -g
```

Now that you've set up grunt cli, you're finally able to start development! To setup all your asset compilation and watching, enter in the following command:

```sh
grunt devel
```

### Review

Download [node.js](https://nodejs.org/en/) and run the following commands in your terminal:

```sh
npm install bower
bower install
npm install
sudo npm install grunt-cli -g (osx)
npm install grunt-cli -g (windows)
grunt devel
```

## Quick Installation Guide

Here's a quick guide, without machine dependent downloads, for those who have already gone through the first installation steps and wish to jump into a new project:

```
bower install
npm install
grunt devel
```
