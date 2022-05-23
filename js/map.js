'use strict';

document.addEventListener('DOMContentLoaded', () => {
   // Карта  start ==========================================================================
   // Карта ==========================================================
   const map = L.map('map',
      {
         scrollWheelZoom: false
      })
      .setView({
         lat: 56.38204117303755,
         lng: 43.75134119707313,
      }, 18);
   // Add OSM tile leayer to the Leaflet map.
   L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
   ).addTo(map);

   const points = [
      {
         title: ` «ЗЖБИ»
         г.Новгород, 
         ул.Боровая, 9а 
         телефон: 9 (999) 98-98-778
         эл.почта: zzhbi@mail.ru `,
         lat: 56.38204117303755,
         lng: 43.75134119707313,
      },
   ];

   points.forEach(({ lat, lng, title }) => {
      const icon = L.icon({
         iconUrl: "images/icons/map.svg",
         iconSize: [165, 38],
         iconAnchor: [30, 0],
      });

      const marker = L.marker(
         {
            lat,
            lng,
            title,
         },
         {
            icon,
         },
      );
      marker.addTo(map)
         .bindPopup(title);
   });

   // Карта ==========================================================









   // Карта end ==============================================================================
});
