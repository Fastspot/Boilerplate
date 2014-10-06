# Fastspot Boilerplate

For kickstarting internal and client project builds. Inspired by [HTML5Boilerplate](http://html5boilerplate.com/).

### Installing Dependencies

Resources are installed with grunt. Don't forget the `--save-dev` flag when adding components beyond the defaults defined in `bower.json`.

### Building Resources

The resources are built using Grunt and output into the base `css/` and `js/` directories. Define resources to be built, as well as variables to be replaced, in the project's `package.json`:

##### CSS

```
...
  "css": {
    "css/site.css": "css/src/site.less"
  },
...
```

##### JS

```
...
  "js": {
    "js/site.js": [
      "js/src/site.js"
    ]
  },
...
```

##### Variables

```
...
  "vars": {
	"variable": "value"
  },
...
```
