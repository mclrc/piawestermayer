<template>
	<div id="map" width="300" height="300"></div>
</template>
<script setup lang="ts">
import 'leaflet/dist/leaflet.css?module'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { LatLngExpression } from 'leaflet'

const address = 'Olivaer Platz 15'
const coords = <LatLngExpression>[52.4998539, 13.3144334]
const zoom = 20 

onMounted(async () => {
	if (!process.client) return;
	const L = await import('leaflet')

	const map = L.map('map', { center: coords, zoom })

	const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map)
	
	const marker = L.marker(coords, {
		icon: new L.Icon({
			iconUrl: markerIconPng,
			iconAnchor: [13, 41],
			popupAnchor: [0, -32],
		}),
	}).addTo(map)
	
	marker.bindPopup(address).openPopup()
})
</script>
<style scoped lang="scss">
#map {
	width: 400px;
	height: 400px;
}
</style>
