const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([165, 35]), // always project lon/lat
    zoom: 2.5,
  }),
});

// Add a marker
// const marker = new ol.Feature({
//   geometry: new ol.geom.Point(ol.proj.fromLonLat([135, 35])),
// });
const vectorSource = new ol.source.Vector();
const markerLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerLayer);

fetch('/assets/js/gps_data.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split('\n');
    lines.shift(); // Remove header line
    lines.forEach(line => {
      const [name, lat, lon, point, image] = line.split(',');
      console.log(`Adding marker: ${name} at (${lat}, ${lon})`);
      const feature = new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([parseFloat(lon), parseFloat(lat)])
        ),
        name: name,
        image: image,
      });
      vectorSource.addFeature(feature);
    });
  });

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');

const overlay = new ol.Overlay({
  element: popup,
  offset: [10, -10],
  positioning: 'bottom-left'
});

map.addOverlay(overlay);

map.on('pointermove', function (evt) {
  const feature = map.forEachFeatureAtPixel(evt.pixel, f => f);

  if (feature) {
    const coords = feature.getGeometry().getCoordinates();
    const imageUrl = feature.get('image');
    const name = feature.get('name');

    popupImg.src = imageUrl;
    popupTitle.innerText = name;

    popup.style.display = 'block';
    overlay.setPosition(coords);
  } else {
    popup.style.display = 'none';
  }
});

