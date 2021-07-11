var places = []
places.push({ "title": 'Clubhouse', "detail": 'clubhouse', "location": {lat: 13.987699, lon: 100.657391} })
places.push({ "title": "Guardhouse", "detail": "front-guardhouse", "location": {lat: 13.992663, lon: 100.657400} })
places.push({ "title": "Guardhouse", "detail": "garden1-guardhouse", "location": {lat: 13.984765, lon: 100.656722} })

for (const place in places){
	console.log(place)
	// map.Overlays.add(new longdo.Marker(place['location']), {
	// 	title: place['title'],
	// 	icon: {
	// 		url: 'https://map.longdo.com/mmmap/images/pin_mark.png',
	// 		offset: { x: 14, y: 14 }
	// 	},
	// 	detail: place['detail']
	// })
}
places.forEach(
	element => console.log(element.location)
);
