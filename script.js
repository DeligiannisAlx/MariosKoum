// Initialize the map
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 38.907, lng: -77.037 }, // Default center (e.g., Washington, D.C.)
        zoom: 10, // Default zoom level
    });

    // Example pins (markers) - replace with your own data
    const locations = [
        { lat: 38.897, lng: -77.037, title: "Winery 1" },
        { lat: 38.905, lng: -77.044, title: "Winery 2" },
        { lat: 38.912, lng: -77.032, title: "Winery 3" },
    ];

    locations.forEach(location => {
        addMarker(location.lat, location.lng, location.title);
    });
}

function addMarker(lat, lng, title) {
    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: title,
        icon: {
            url: 'wine-glass.png', // Replace with your wine glass icon image
            scaledSize: new google.maps.Size(30, 30)
        }
    });
}
