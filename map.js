(function () {
    mapboxgl.accessToken = "pk.eyJ1IjoiZmZ3OTQiLCJhIjoiY2txdDU2MTFwMWRwYjJ4bzFya2JiNGlhbCJ9.lBPb3j_LNK9YTKkpeIzGTQ"

    let map = new mapboxgl.Map({
        container: 'map',
        center: [5.8155693119213385, 51.93615768914052],
        zoom: 13,
        style: 'mapbox://styles/mapbox/dark-v10'
    
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl())

    let marker = document.createElement('div');
    marker.id = 'marker';
    marker.innerHTML = '<img src ="/media/placeholder.png">';

    let mapMarker = new mapboxgl.Marker(marker);
    mapMarker.setLngLat([5.8155693119213385, 51.93615768914052]);
    mapMarker.addTo(map);

})();