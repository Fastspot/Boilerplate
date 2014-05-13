# Fastspot Boilerplate

For kickstarting internal and client project builds. Inspired by [HTML5Boilerplate](http://html5boilerplate.com/).

#### Includes

* [jQuery](http://jquery.com/)
* [Modernizr](http://modernizr.com/) (with yepnope.js & html5shiv)
* MatchMedia polyfills ([IE8](https://gist.github.com/benplum/8045336), [IE9](https://gist.github.com/benplum/8045327))
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Gridlock](https://github.com/benplum/Gridlock) 
* [Zoetrope](https://github.com/benplum/Zoetrope) 

#### Building Resources

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