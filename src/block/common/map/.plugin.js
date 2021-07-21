//2gis map
var twoGis_map_container = 'map-2gis';
var twoGis = $('#' + twoGis_map_container);  
//var CMS__TPL_PATH = '';    
//var CMS__TPL_PATH = '/mechta';  
var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
if(twoGis.length) { 
	var twoGis_map_data = JSON.parse(twoGis.attr('data-map') || '{}');
	var map;
	var mapCoord = twoGis_map_data.center;
	var mapZoom = twoGis_map_data.zoom;
	var placeholderCoord = twoGis_map_data.placemarks.coord;
	var iconUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconRetinaUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
	var iconSize = [47, 55];
	var iconAnchor = [23, 55];
	var scrollWheelZoom = "false" 
	if("iconUrl" in twoGis_map_data){  
		var iconUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
		var iconRetinaUrl = CMS__TPL_PATH + '/img/svg/icon-map.svg';
		var iconSize = [47, 55];
		var iconAnchor = [23, 55];
		var scrollWheelZoom = "true" 
	}
	DG.then(function () {
		map = DG.map(twoGis_map_container, {
			center: mapCoord,
			zoom: mapZoom,
			scrollWheelZoom: scrollWheelZoom,
			fullscreenControl: false
		});
		var myIcon = DG.icon({
			iconUrl: iconUrl,
			iconRetinaUrl: iconRetinaUrl,
			iconSize: iconSize,
			iconAnchor: iconAnchor,
			popupAnchor: [0, 0]
		});

		if(twoGis_map_data.placemarks.length) {
			for(var i = 0; i < twoGis_map_data.placemarks.length; i++) {
				if("placemarksDesc" in twoGis_map_data){
					//var popHeading = '<div class="map__popup-preview"><div class="map__popup-insale"><span>'+twoGis_map_data.placemarks[i].insale+'</span>Квартир<br> в продаже</div><div class="map__popup-label-group"><div class="map__popup-label-card  is--sale"></div><div class="map__popup-label-card  is--mortgage"></div><div class="map__popup-label-card  is--top"></div><div class="map__popup-label-card  is--instalments"></div></div><img src="'+twoGis_map_data.placemarks[i].img+'"></div><div class="map__popup-heading">'+twoGis_map_data.placemarks[i].heading+'</div><div class="map__popup-address">'+twoGis_map_data.placemarks[i].address+'</div><div class="map__popup-metro">'+twoGis_map_data.placemarks[i].metro+'</div><div class="map__popup-cost">от '+twoGis_map_data.placemarks[i].cost+' <small>₽</small></div><div class="map__popup-btn"><a class="link__item  is--dark" href="'+twoGis_map_data.placemarks[i].link+'">Подробнее</a></div>';
					var popHeading = '<div class="map__popup-preview"><div class="map__popup-insale"><span>'+twoGis_map_data.placemarks[i].insale+'</span>Квартир<br> в продаже</div><img src="'+twoGis_map_data.placemarks[i].img+'"></div><div class="map__popup-heading">'+twoGis_map_data.placemarks[i].heading+'</div><div class="map__popup-address">'+twoGis_map_data.placemarks[i].address+'</div><div class="map__popup-metro">'+twoGis_map_data.placemarks[i].metro+'</div><div class="map__popup-cost">от '+twoGis_map_data.placemarks[i].cost+' <small>₽</small></div><div class="map__popup-btn"><a class="button__line" href="'+twoGis_map_data.placemarks[i].link+'">Подробнее</a></div>';
					var obj_popup = DG.popup({
						className: 'map__popup  is--catalog',
					}).setContent(popHeading);
		
				} else {
					var popHeading = '<div class="map__popup-heading">'+twoGis_map_data.placemarks[i].heading+'</div>';	
					var obj_popup = DG.popup({
						className: 'map__popup',
					}).setContent(popHeading);

				};
				DG.marker(twoGis_map_data.placemarks[i].coord, {icon: myIcon}).addTo(map).bindPopup(obj_popup);
			}
		}
	});
	$(document.body).on('click.azbn7', '[data-office]', null, function(event){
		event.preventDefault();
		var btn = $(this);
		var coord = btn.attr('data-coord');
		var coord_arr = coord.split(',');
		//console.dir(coord_arr);
		var lat = parseFloat((coord_arr[0] || '').trim());
		var lng = parseFloat((coord_arr[1] || '').trim());
		$('[data-office]').removeClass('is--active');
		$(this).addClass('is--active');
		map.setView(
			[lat,  lng]
		);
	});
}