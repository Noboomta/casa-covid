function checkDistance(displacementResult){
	console.log(displacementResult + " m.")
	return (displacementResult/1000).toFixed(2)
}
var myMap
var myDragPin
function init() {
	var map = new longdo.Map({
		placeholder: document.getElementById('map'),
	})
	map.bound({
		minLon: 100.635, minLat: 13.989,
		maxLon: 100.675, maxLat: 13.99
	  });
	map.location(longdo.LocationMode.Geolocation);
	map.Layers.setBase(longdo.Layers.GRAY);
	// map.Layers.add(longdo.Layers.TRAFFIC);

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

	const fs = require('fs')
	fs.readFile('./place.json', 'utf8', (err, jsonString) => {
		console.log(jsonString)
	})

	myMap = map
}

function addDrag() {
	myMap.location(longdo.LocationMode.Geolocation);
	console.log(myMap.location())
	var dragPin = new longdo.Marker(myMap.location(),
		{
		  title: 'Marker',
		  icon: {
			url: 'https://map.longdo.com/mmmap/images/pin_mark.png',
			offset: { x: 12, y: 45 }
		  },
		  detail: 'Drag me',
		  draggable: true,
		  weight: longdo.OverlayWeight.Top,
		});
	myMap.Overlays.add(dragPin)
	myDragPin = dragPin
	var result = myDragPin.location()
	document.getElementById("lat").value = result.lat
	document.getElementById("lon").value = result.lon
}

function logDragPin() {
	if(myDragPin){
		var result = myDragPin.location()
		document.getElementById("lat").value = result.lat
		document.getElementById("lon").value = result.lon
		console.log(myDragPin.location())
	}
}

function get_drag_pin_location() {
	return myDragPin.location()
}

function getNewHouse() {
	var address = document.getElementById("address").value
	var linename = document.getElementById("linename").value
	var status = document.getElementById("status").value
	var lat = document.getElementById("lat").value
	var lon = document.getElementById("lon").value
	console.log(address);

	alert("Added")
}
