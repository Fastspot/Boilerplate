# Syntax

```twig
{# Variable Use #}
{{variable}}

{# Including a file #}
{% include "" with {
	links: [
		{
			key1: "value",
			key2: "value"
		},
		{}
	]
} %}

{# If Statement #}
{% if condition %}
{% endif %}

{# If and Elseif Statement #}
{% if condition %}
{% elseif condition %}
{% endif %}

{# Loops #}
{% for link in links %}
{% endfor %}
```

# Partials

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

## Image Partial

```twig
{% include "../partials/shared/image.twig" with {
	class: "component",
	dimension: img.wide.lrg,
	image: 1
} %}
```
