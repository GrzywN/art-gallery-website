const coordinates = [41.48028, -71.31102];
const icon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/GrzywN/art-gallery-website/12911ed016b32253e07e4a75593390e81c9fcb58/src/assets/icon-location.svg',
  iconSize: [66, 88],
  iconAnchor: [33, 88],
});

const map = L.map('map').setView(coordinates, 16);
const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
});
const marker = L.marker(coordinates, { icon: icon });

tileLayer.addTo(map);
marker.addTo(map);
