/*-------------------------------------------
	Wayfinder
-------------------------------------------*/

Site.modules.Wayfinder = (function($, Site) {

  var app,
      data,
      map,
      bounds,
      inactiveMarker,
      activeMarker,
      layers,
      layersControl,
      currentLayer,
      categories,
      categoriesHTML,
      places,
      filters,
      filtersData,
      filtersHTML,
      lightbox,
      lightboxData,
      lightboxHTML;

  function init() {
    if ($("#map").length) {
      bindData();
      setupMap();
      setupMarkers();
      setupLayers();
      setupCategories();
      setupFilters();
      bindUI();
      updatePlaces();
      console.log(data);
      console.log(layers);
    }
  }

  function bindData() {
    app = $('html');

    data = mapData;

    layers = [
      {
        label: 'upper',
        image: '../../images/map.jpg',
        group: []
      },
      {
        label: 'lower',
        image: '../../images/map_hue.jpg',
        group: []
      }
    ];

    layersControl = {
      '<span data-label="upper" class="map_layer_quantity_wrapper"><span class="map_layer_quantity"></span></span><span class="map_layer_label">upper level</span>': '',
  		'<span data-label="lower" class="map_layer_quantity_wrapper"><span class="map_layer_quantity"></span></span><span class="map_layer_label">lower level</span>': ''
    };

    filtersData = [
  		{
        type: 'dropdown',
  			label: 'Airline',
  			options: [
  				'Airline',
  				'American',
  				'Spirit'
  			]
  		},
  		{
        type: 'input',
  			label: 'Gate'
  		}
  	];

    lightbox = $('.map_lightbox_body');
  }

  function setupMap() {
    map = L.map('map', {
			crs: L.CRS.Simple,
			zoomControl: false,
			minZoom: 0,
			attributionControl: false
		});

    L.control.zoom({
			position: 'bottomright'
		}).addTo(map);

		bounds = [[0, 0], [2000, 2000]];

		map.fitBounds(bounds);
  }

  function setupMarkers() {
    inactiveMarker = L.icon({
			iconUrl: '../../images/map_marker_red.svg',
			iconSize: [26, 35],
			iconAnchor: [13, 35]
		});

    activeMarker = L.icon({
			iconUrl: '../../images/map_marker_black.svg',
			iconSize: [40, 56],
			iconAnchor: [20, 56]
		});

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        data[key].markers = [];

        for(var point in data[key].points) {
          data[key].points[point].attr.id = key + ' ' + point;

          data[key].markers.push(L.marker(data[key].points[point].coordinates, {
            data: data[key].points[point].attr,
            icon: inactiveMarker
          })
            .bindPopup('', {
              autoPan: false
            })
    					.on('click', flyToMarker)
    					.on('popupopen', openLightbox)
    					.on('popupclose', closeLightbox));

          for (var layer in layers) {
            if (layers.hasOwnProperty(layer)) {
              if (data[key].points[point].attr.layer === layers[layer].label) {
                layers[layer].group.push(data[key].markers[point]);
              }
            }
          }
        }
      }
    }
  }

  function setupLayers() {
    for (var key in layers) {
      if (layers.hasOwnProperty(key)) {
        layers[key].control = L.layerGroup(layers[key].group);
  			layers[key].control.addLayer(L.imageOverlay(layers[key].image, bounds));
      }
    }

    var controlKey = 0;

    for (var key in layersControl) {
      if (layersControl.hasOwnProperty(key)) {
        layersControl[key] = layers[controlKey].control;
        controlKey += 1;
      }
    }

    layers[0].control.addTo(map);
    currentLayer = layers[0].label;

    L.control.layers(layersControl, null, {
			position: 'bottomleft'
		}).addTo(map);
  }

  function setupCategories() {
    categories = $('.map_categories');
    categoriesHTML = '';

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        categoriesHTML += '<div class="map_category">' +
          '<button class="map_category_switch" data-category="' + data[key].category + '">' + data[key].category + '</button>' +
          '<div class="map_sorter">' +
            '<button class="map_sorter_switch map_sorter_switch_name">Name</button>' +
          '</div>' +
          '<div class="map_places">';

        for (var point in data[key].points) {
          categoriesHTML += '<div class="map_place" data-id="' + key + ' ' + point + '" data-layer="' + data[key].points[point].attr.layer + '">' + data[key].points[point].attr.title + '</div>';
        }

        categoriesHTML += '<p class="map_places_empty">Sorry, no results here. Try broadening your filters.</p>';
        categoriesHTML += '</div></div>';
      }
    }

    $(categories).html(categoriesHTML);
    places = $('.map_place');
  }

  function setupFilters() {
    filters = $('.map_filters');
    filtersHTML = '';

    for (var key in filtersData) {
      if (filtersData.hasOwnProperty(key)) {
        filtersHTML += '<div class="map_filter">';

        if (filtersData[key].type === 'dropdown') {
          filtersHTML += '<button class="map_filter_switch">' + filtersData[key].label + '</button>' +
          '<div class="map_filter_options">';

          for (var option in filtersData[key].options) {
            if (filtersData[key].options.hasOwnProperty(option)) {
              filtersHTML += '<button class="map_filter_option">' + filtersData[key].options[option] + '</button>';
            }
          }

          filtersHTML += '</div>';
        } else {
          filtersHTML += '<input class="map_filter_input" placeholder="' + filtersData[key].label + '" />';
        }

        filtersHTML += '</div>';
      }
    }

    $(filters).html(filtersHTML);
  }

  function bindUI() {
    $('.map_lightbox_switch').on('click', function() {
      expandMap();
    });

    $('.map_lightbox_close').on('click', function() {
      map.closePopup();
    });

    $('.map_category_switch').on('click', function() {
      togglePlaces($(this));
      filterMapCategory($(this));
    });

    $('.map_sorter_switch').on('click', function() {});

    $('.map_place').on('click', function() {
      filterPlaces($(this));
    });

    $('.map_filter_switch').on('click', function() {
      toggleFilterSwitch($(this));
    });

    $('.map_filter_option').on('click', function() {});

    $('.map_filter_input').on('keyup', function() {});

    map.on('baselayerchange', function(e) {
      changeLayer(e);
      updatePlaces();
    });
  }

  function togglePlaces(e) {
    var closestCategory = $(e).closest('.map_category');

    $('.map_category').not(closestCategory).removeClass('map_places_open');
    $(closestCategory).toggleClass('map_places_open');
  }

  function filterPlaces(e) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        for (var point in data[key].points) {
          if ($(e).data('id') === data[key].points[point].attr.id) {
            data[key].markers[point].openPopup();
            flyToMarker(data[key].markers[point]);
          }
        }
      }
    }
  }

  function updatePlaces() {
    $(places).each(function() {
      if(currentLayer == $(this).data('layer')) {
        $(this).addClass('visible');
      } else {
        $(this).removeClass('visible');
      }
    });
  }

  function filterMapCategory(e) {
    var filterKey = $(e).data('category');

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        for (var point in data[key].points) {
          if ($(e).closest('.map_category').hasClass('map_places_open')) {
            if (filterKey == key) {
              data[key].markers[point].setOpacity(1);
            } else {
              data[key].markers[point].setOpacity(0);
            }
          } else {
            data[key].markers[point].setOpacity(1);
          }
        }
      }
    }
  }

  function toggleFilterSwitch(e) {
    var closestFilter = $(e).closest('.map_filter');

    $('.map_filter').not(closestFilter).removeClass('map_filter_open');
    $(closestFilter).toggleClass('map_filter_open');
  }

  function flyToMarker(e) {
    var center;

		if (e._latlng) {
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
    $(app).addClass('map_lightbox_open');

    setActiveIcon(e);
    populateLightbox(e);
  }

  function closeLightbox(e) {
    $(app).removeClass('map_lightbox_open');

    setInactiveIcon(e);
  }

  function setInactiveIcon(e) {
    e.target.setIcon(inactiveMarker);
  }

  function setActiveIcon(e) {
    e.target.setIcon(activeMarker);
  }

  function populateLightbox(e) {
    lightboxData = e.target.options.data;
    lightboxHTML = '';

    if (lightboxData.title) {
      lightboxHTML += '<h2 class="map_lightbox_title">' + lightboxData.title +  '</h2>';
    }

    $(lightbox).html(lightboxHTML);
  }

  function changeLayer(e) {
    currentLayer = $(e.name).data("label");
  }

	Site.onInit.push(init);

	return {};

})(jQuery, Site);
