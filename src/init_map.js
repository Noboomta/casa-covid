// import "https://api.longdo.com/map/?key=a18ea1e3fa5aacd889ae1028d3709545"

// const fs = require('fs')

function checkDistance(displacementResult){
	console.log(displacementResult + " m.")
	return (displacementResult/1000).toFixed(2)
}

function init() {
	map = new longdo.Map({
		placeholder: document.getElementById('map'),
	})
	map.location(longdo.LocationMode.Geolocation);
	map.Layers.setBase(longdo.Layers.GRAY);
	map.Layers.add(longdo.Layers.TRAFFIC);

	var places = []
	places.push({ "title": 'Clubhouse', "detail": 'clubhouse', "location": {lat: 13.987699, lon: 100.657391} })
	places.push({ "title": "Guardhouse", "detail": "front-guardhouse", "location": {lat: 13.992663, lon: 100.657400} })
	places.push({ "title": "Guardhouse", "detail": "garden1-guardhouse", "location": {lat: 13.984765, lon: 100.656722} })

	places.forEach(
		place =>
		map.Overlays.add(new longdo.Marker(place['location']), {
			title: place['title'],
			icon: {
				url: 'https://map.longdo.com/mmmap/images/pin_mark.png',
				offset: { x: 14, y: 14 }
			},
			detail: place['detail']
		})
	);
}
