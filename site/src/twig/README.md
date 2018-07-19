# Syntax

```twig
{# Variable Use #}
{{variable}}

{# Including a file #}
{% include "file.twig" with {
	class: "",
	modifier: "",
	array: ["", ""],
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
