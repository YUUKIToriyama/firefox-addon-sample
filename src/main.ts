import { browser } from 'webextension-polyfill-ts';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const div = document.createElement("div");
div.id = "map";
div.style.width = "100%";
div.style.height = "100vh";
document.body.appendChild(div);
document.body.style.width = "200px";
document.body.style.height = "200px";

//let latlng = await browser.storage.local.get("latlng")

const map = new L.Map(div, {
	zoom: 15,
	center: {
		lat: 35,
		lng: 135
	}
});
const baseLayer = new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png");
baseLayer.addTo(map);

map.on({
	move: () => {
		const center = map.getCenter();
		browser.storage.local.set({
			latlng: {
				lat: center.lat,
				lng: center.lng
			}
		}).then(() => console.log("OK"), (error) => console.error(error));
	}
});