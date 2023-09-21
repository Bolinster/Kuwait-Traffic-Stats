// Replace 'YOUR_API_KEY' with your TomTom API key
var apiKey = 'LkPgIiEz443LHScaK6dGmpa9GT0AU6cD';

// Initialize the map
var map = tt.map({
    key: apiKey,
    container: 'map',
    style: 'tomtom://vector/1/basic-main',
    center: [latitude, longitude], // Replace with your desired map center coordinates
    zoom: 10 // Adjust the zoom level as needed
});

// Load GeoJSON data
map.on('load', function () {
    // Replace 'your-geojson-file.geojson' with the URL to your GeoJSON file
    map.addSource('geojson-source', {
        type: 'geojson',
        data: 'your-geojson-file.geojson'
    });

    // Add a GeoJSON layer to the map
    map.addLayer({
        id: 'geojson-layer',
        type: 'fill',
        source: 'geojson-source',
        paint: {
            'fill-color': '#FF0000', // Change the fill color as needed
            'fill-opacity': 0.5
        }
    });
});
