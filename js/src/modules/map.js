/*-------------------------------------------
	Map
-------------------------------------------*/

Site.modules.Map = (function($, Site) {

	var map;
	var bounds;
	var groups;
	var filtersGroup;
	var lightbox;
	var lightboxClose;
	var lightboxBody;

	var state;

	var layers = [
		{
			label: 'upper',
			image: '../../images/map.jpg',
			group: [],
			control: ''
		},
		{
			label: 'lower',
			image: '../../images/map_hue.jpg',
			group: [],
			control: ''
		}
	];

	var layersControl = {
		'<span class="map_layer_quantity"></span> upper level': '',
		'<span class="map_layer_quantity"></span> lower level': ''
	};

	var data = [
		{
			category: 'Transportation',
			points: [
				{
					coordinates: [800, 800],
					attr: {
						layer: 'upper',
						title: 'Shuttle',
						airline: 'American'
					}
				},
				{
					coordinates: [1000, 1000],
					attr: {
						layer: 'lower',
						title: 'Train',
						airline: 'Spirit'
					}
				}
			]
		},
		{
			category: 'Food',
			points: [
				{
					coordinates: [1200, 1200],
					attr: {
						layer: 'lower',
						title: 'Dunkin Donuts',
						airline: 'American'
					}
				}
			]
		}
	];

	var filters = [
		{
			label: 'Airline',
			options: [
				'Airline',
				'American',
				'Spirit'
			]
		},
		{
			label: 'Gate'
		}
	];

	function init() {
		if($('#map').length) {
			setupMap();
			setupMarkers();
			setupLayers();
			setupGroups();
			setupFilters();
			setupLightbox();
			bindUI();
		}
	}

	function setupMap() {
		map = L.map('map', {
			crs: L.CRS.Simple,
			minZoom: 0
		});

		bounds = [[0, 0], [2000, 2000]];

		map.fitBounds(bounds);
	}

	function setupMarkers() {
		for(var key in data) {
			for(var point in data[key].points) {
				var latlng = L.latLng(data[key].points[point].coordinates);

				data[key].points[point].marker = L.marker(latlng, {
					data: data[key].points[point].attr
				}).bindPopup('', {
					autoPan: false
				})
					.on('click', flyToMarker)
					.on('popupopen', openLightbox)
					.on('popupclose', closeLightbox);
			}
		}
	}

	function setupLayers() {
		for(var key in layers) {
			for(var group in data) {
				for(var point in data[group].points) {
					if(data[group].points[point].attr.layer === layers[key].label) {
						layers[key].group.push(data[group].points[point].marker);
					}
				}
			}

			layers[key].control = L.layerGroup(layers[key].group);
			layers[key].control.addLayer(L.imageOverlay(layers[key].image, bounds));
		}

		layers[0].control.addTo(map);

		var controlKey = 0;

		for(var key in layersControl) {
			layersControl[key] = layers[controlKey].control;
			controlKey += 1;
		}

		L.control.layers(layersControl).addTo(map);
	}

	function setupGroups() {
		groups = $('.map_groups');

		for(var key in data) {
			var group = el({
				type: 'div',
				class: 'map_group'
			});

			var groupSwitch = el({
				type: 'button',
				class: 'map_group_switch',
				html: data[key].category,
				attr: {
					'data-swap-group': 'map_group_switch',
					'data-swap-target': '[data-swap-id="' + data[key].category + '"]'
				}
			});

			group.append(groupSwitch);

			var places = el({
				type: 'div',
				class: 'map_places',
				attr: {
					'data-swap-id': data[key].category
				}
			});

			group.append(places);

			for(var point in data[key].points) {
				var place = el({
					type: 'button',
					class: 'map_place',
					html: data[key].points[point].attr.title,
					loopAttr: data[key].points[point].attr
				});

				places.append(place);
			}

			groups.append(group);
		}
	}

	function setupFilters() {
		filtersGroup = $('.map_filters');

		for(var key in filters) {
			var filter = el({
				type: 'div',
				class: 'map_filter'
			});

			if(filters[key].options) {
				var filterSwitch = el({
					type: 'button',
					class: 'map_filter_switch',
					html: filters[key].label,
					attr: {
						'data-swap-group': 'map_filter_switch',
						'data-swap-target': '[data-swap-id="' + filters[key].label + '"]'
					}
				});

				filter.append(filterSwitch);

				var options = el({
					type: 'div',
					class: 'map_filter_options',
					attr: {
						'data-swap-id': filters[key].label
					}
				});

				filter.append(options);

				for(var option in filters[key].options) {
					var option = el({
						type: 'button',
						class: 'map_filter_option map_filter_option_button',
						html: filters[key].options[option]
					});

					options.append(option);
				}
			} else {
				var option = el({
					type: 'input',
					class: 'map_filter_option map_filter_option_input',
					attr: {
						'placeholder': filters[key].label
					}
				});

				filter.append(option);
			}

			filtersGroup.append(filter);
		}
	}

	function setupLightbox() {
		lightbox = $('.map_lightbox');

		lightboxClose = el({
			type: 'button',
			class: 'map_lightbox_close',
			html: 'Close'
		});

		lightbox.append(lightboxClose);

		lightboxBody = el({
			type: 'div',
			class: 'map_lightbox_body'
		});

		lightbox.append(lightboxBody);
	}

	function bindUI() {
		$('.map_group_switch').swap();
		$('.map_filter_switch').swap();

		$('.map_place').on('click', function() {
			var data = $(this).data();

			filterPlace(data);
		});

		$('.map_filter_option_button').on('click', function() {
			var data = $(this).text();

			updateMap(data, $(this).index());
		});

		$('.map_filter_option_input').on('change', function() {
			var data = $(this).val();

			updateMap(data);
		});

		$('.map_lightbox_close').on('click', function() {
			map.closePopup();
		});
	}

	function filterPlace(place) {
		for(var key in data) {
			for(var point in data[key].points) {
				if(data[key].points[point].attr.title === place.title) {
					data[key].points[point].marker.openPopup();
					flyToMarker(data[key].points[point].marker);
				}
			}
		}
	}

	function updateMap(filterData, filterIndex) {
		if(filterIndex == 0) {
			for(var key in data) {
				for(point in data[key].points) {
					data[key].points[point].marker.setOpacity(1);
				}
			}
		} else {
			for(var key in data) {
				for(point in data[key].points) {
					data[key].points[point].marker.setOpacity(0);

					for(attr in data[key].points[point].attr) {
						if(data[key].points[point].attr[attr] === filterData) {
							data[key].points[point].marker.setOpacity(1);
						}
					}
				}
			}
		}
	}

	function flyToMarker(e) {
		var center;

		if(e._latlng) {
			center = e._latlng;
		} else {
			center = e.target.getLatLng();
		}

		var x = map.latLngToContainerPoint(center).x;
		var y = map.latLngToContainerPoint(center).y;
		var point = map.containerPointToLatLng([x, y]);

		map.flyTo(point);
	}

	function openLightbox(e) {
		$(lightboxBody).html(
			'<div class="map_lightbox_title">' + e.target.options.data.title + '</div>'
		);
	}

	function closeLightbox() {
		$(lightboxBody).html('');
	}

	function el(options) {
		var domEl = document.createElement(options.type);
		$(domEl).addClass(options.class);

		if(options.html) {
			$(domEl).html(options.html);
		}

		if(options.attr) {
			for(var key in options.attr) {
				$(domEl).attr(key, options.attr[key]);
			}
		}

		if(options.loopAttr) {
			for(var key in options.loopAttr) {
				$(domEl).attr('data-' + key, options.loopAttr[key]);
			}
		}

		return domEl;
	}

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
