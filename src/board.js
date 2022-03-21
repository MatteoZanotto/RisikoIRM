window.addEventListener('load', (event) => {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFndTkiLCJhIjoiY2wwdHpoaXB5MGJsczNicGUwaHR4ZXlzcyJ9.uVy0IiyAjDMQ_wjehCogaA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [11.406939, 45.191454],
        zoom: 5
    });

    map.on('load', async () => {
        const geojson = await get_geojson();
        map.addSource('route', {
            'type': 'geojson',
            'data': geojson
        });

        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#FEB52C',
                'line-width': 2
            }
        });

        async function get_geojson() {
            try {
                const response = await fetch(
                    'https://datahub.io/core/geo-countries/r/countries.geojson',
                    { method: 'GET' }
                );

                const features = await response.json();
                return features;
            } catch (err) {
                throw new Error(err);
            }
        }
    });    
});
