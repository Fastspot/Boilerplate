# Syntax

```twig
{# Variable Use #}
{{variable}}

{# Including a file #}
{% include "file.twig" with {
	class: "",
	modifier: "",
	array: ["", ""]
	associativeArray: [
		{
			key1: "",
			key2: ["", ""]
		},
		{
			key1: "",
			key2: ["", ""]
		}
	]
} %}

{# Using a Block #}
{% block name %}
	<p>Content</p>
{% endblock %}

{# Appending to a Block #}
{% block name %}
	{{parent()}}

	<p>Content</p>
{% endblock %}

{# If Statement #}
{% if condition %}
{% endif %}

{# If and Elseif Statement #}
{% if condition %}
{% elseif condition == "" %}
{% elseif condition == 0 %}
{% elseif not condition %}
{% elseif condition or anotherCondition %}
{% elseif condition and anotherCondition %}
{% endif %}

{# Loops With an Array #}
{% for link in links %}
	<a href="">{{link}}</a>
{% endfor %}

{# Loops With an Associative Array #}
{% for link in links %}
	<a href="{{link.href}}">{{link.name}}</a>
{% endfor %}
```

# Partials

## Background Partial

```twig
{% include "../partials/shared/picture.twig" with {
	class: "component",
	sources: {
		"0px": img.wide.sml,
		"980px": img.wide.med,
		"1220px": img.wide.lrg,
	},
	image: 1
} %}
```

## Picture Partial

```twig
{% include "../partials/shared/picture.twig" with {
	class: "component",
	sources: {
		"980px": img.wide.med,
		"1220px": img.wide.lrg,
	},
	fallback: img.wide.sml,
	image: 1
} %}
```

## Image Partial

```twig
{% include "../partials/shared/image.twig" with {
	class: "component",
	dimension: img.wide.lrg,
	image: 1
} %}
```
