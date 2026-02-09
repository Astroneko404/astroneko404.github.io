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

const selectHover = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove,
  layers: [markerLayer],
  hitTolerance: 5
});

map.addInteraction(selectHover);

selectHover.on('select', function (e) {
  const feature = e.selected[0];

  if (!feature) {
    popup.style.display = 'none';
    return;
  }

  let coords = feature.getGeometry().getCoordinates().slice();
  const view = map.getView();
  const center = view.getCenter();

  const worldWidth = ol.extent.getWidth(
    ol.proj.get('EPSG:3857').getExtent()
  );

  coords[0] += Math.round((center[0] - coords[0]) / worldWidth) * worldWidth;

  popupImg.src = feature.get('image');
  popupTitle.innerText = feature.get('name');

  popup.style.display = 'block';
  overlay.setPosition(coords);
});
